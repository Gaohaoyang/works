'use client'

import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

interface EEData {
  drawNumber: string
  drawDate: string
  drawName: string
  drawSize: string
  drawCRS: string
  dd1: string
  dd2: string
  dd3: string
  dd4: string
  dd5: string
  dd6: string
  dd7: string
  dd8: string
  dd9: string
  dd10: string
  dd11: string
  dd12: string
  dd13: string
  dd14: string
  dd15: string
  dd16: string
  dd17: string
  dd18: string
}

interface RawEEResponse {
  rounds: EEData[]
}

// Define CRS ranges in ascending order (lowest to highest)
const CRS_RANGES = [
  { name: '0-300', dataIndex: 16 },
  { name: '301-350', dataIndex: 15 },
  { name: '351-400', dataIndex: 14 },
  { name: '401-410', dataIndex: 13 },
  { name: '411-420', dataIndex: 12 },
  { name: '421-430', dataIndex: 11 },
  { name: '431-440', dataIndex: 10 },
  { name: '441-450', dataIndex: 9 },
  { name: '451-460', dataIndex: 7 },
  { name: '461-470', dataIndex: 6 },
  { name: '471-480', dataIndex: 5 },
  { name: '481-490', dataIndex: 4 },
  { name: '491-500', dataIndex: 3 },
  { name: '501-600', dataIndex: 1 },
  { name: '601-1200', dataIndex: 0 },
]

// Color ranges from low to high scores with softer colors
const COLORS = [
  '#2c3e50', // Dark blue-gray (lowest)
  '#34495e',
  '#2980b9',
  '#3498db',
  '#1abc9c',
  '#16a085',
  '#27ae60',
  '#2ecc71',
  '#f1c40f',
  '#f39c12',
  '#e67e22',
  '#d35400',
  '#c0392b',
  '#e74c3c',
  '#8e44ad', // Purple (highest)
]

const EChartsComponent = () => {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<echarts.ECharts | null>(null)

  useEffect(() => {
    console.log('EChartsComponent mounted')
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json',
        )
        const jsonData: RawEEResponse = await response.json()

        // Filter rounds starting from #228 and sort by date
        const filteredAndSortedRounds = [...jsonData.rounds]
          .filter((round) => parseInt(round.drawNumber) >= 228)
          .sort(
            (a, b) =>
              new Date(a.drawDate).getTime() - new Date(b.drawDate).getTime(),
          )

        const processedData = filteredAndSortedRounds.map((item) => {
          const distributions = [
            parseInt(item.dd1.replace(/,/g, '')),
            parseInt(item.dd2.replace(/,/g, '')),
            parseInt(item.dd3.replace(/,/g, '')),
            parseInt(item.dd4.replace(/,/g, '')),
            parseInt(item.dd5.replace(/,/g, '')),
            parseInt(item.dd6.replace(/,/g, '')),
            parseInt(item.dd7.replace(/,/g, '')),
            parseInt(item.dd8.replace(/,/g, '')),
            parseInt(item.dd9.replace(/,/g, '')),
            parseInt(item.dd10.replace(/,/g, '')),
            parseInt(item.dd11.replace(/,/g, '')),
            parseInt(item.dd12.replace(/,/g, '')),
            parseInt(item.dd13.replace(/,/g, '')),
            parseInt(item.dd14.replace(/,/g, '')),
            parseInt(item.dd15.replace(/,/g, '')),
            parseInt(item.dd16.replace(/,/g, '')),
            parseInt(item.dd17.replace(/,/g, '')),
            parseInt(item.dd18.replace(/,/g, '')),
          ]
          return {
            drawNumber: item.drawNumber,
            drawDate: item.drawDate,
            drawName: item.drawName,
            drawSize: parseInt(item.drawSize.replace(/,/g, '')),
            drawCRS: parseInt(item.drawCRS),
            distributions,
          }
        })

        if (chartRef.current) {
          if (!chartInstance.current) {
            chartInstance.current = echarts.init(chartRef.current)
          }

          const option = {
            title: {
              text: 'Express Entry CRS Score Distribution',
              subtext: 'Distribution of candidates by CRS score range (From Draw #228)',
            },
            tooltip: {
              trigger: 'axis',
              position: 'top',
              axisPointer: {
                type: 'line',
                label: {
                  show: false,
                },
              },
              formatter: function (params: any[]) {
                if (!params || params.length === 0) return '';

                const date = params[0].axisValue;
                const drawInfo = processedData.find(item => item.drawDate === date);
                if (!drawInfo) return '';

                let result = `Date: ${date}<br/>`;
                result += `Draw #${drawInfo.drawNumber} - ${drawInfo.drawName}<br/>`;
                result += `Minimum CRS: ${drawInfo.drawCRS}<br/>`;
                result += `Total Invitations: ${drawInfo.drawSize.toLocaleString()}<br/><br/>`;

                // Distribution data
                let distributionTotal = 0;
                params.forEach(param => {
                  if (param.seriesName && param.value > 0 && param.seriesName.includes('-')) {
                    result += `${param.marker}${param.seriesName}: ${param.value.toLocaleString()}<br/>`;
                    distributionTotal += param.value;
                  }
                });

                if (distributionTotal > 0) {
                  result += `<br/>Total Candidates: ${distributionTotal.toLocaleString()}`;
                }

                return result;
              },
            },
            legend: {
              data: [...CRS_RANGES.map(range => range.name).reverse(), 'Total Invitations', 'Minimum CRS'],
              type: 'scroll',
              orient: 'vertical',
              right: 10,
              top: 50,
              bottom: 20,
              textStyle: {
                fontSize: 12,
              },
            },
            color: [...COLORS, '#FF0000', '#000000'],
            grid: {
              left: '8%',
              right: '15%',
              bottom: '3%',
              containLabel: true,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: processedData.map(item => item.drawDate),
              axisLabel: {
                rotate: 45,
              },
            },
            yAxis: [
              {
                type: 'value',
                name: 'Number of Candidates',
                position: 'left',
                nameLocation: 'middle',
                nameGap: 50,
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: 'dashed',
                  },
                },
                axisLabel: {
                  formatter: '{value:,}',
                },
              },
              {
                type: 'value',
                name: 'CRS Score',
                position: 'right',
                nameLocation: 'middle',
                nameGap: 50,
                min: 0,
                max: 600,
                interval: 100,
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: '#000000',
                  },
                },
                axisLabel: {
                  formatter: '{value}',
                },
              },
            ],
            series: [
              ...CRS_RANGES.map(range => ({
                name: range.name,
                type: 'line',
                stack: 'Total',
                showSymbol: false,
                emphasis: {
                  focus: 'series',
                  areaStyle: {
                    opacity: 1,
                  },
                },
                areaStyle: {
                  opacity: 0.8,
                },
                data: processedData.map(item => item.distributions[range.dataIndex]),
              })),
              {
                name: 'Total Invitations',
                type: 'line',
                yAxisIndex: 0,
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                  width: 3,
                },
                emphasis: {
                  focus: 'series',
                },
                data: processedData.map(item => item.drawSize),
              },
              {
                name: 'Minimum CRS',
                type: 'line',
                yAxisIndex: 1,
                symbol: 'circle',
                symbolSize: 6,
                lineStyle: {
                  width: 3,
                },
                emphasis: {
                  focus: 'series',
                },
                data: processedData.map(item => item.drawCRS),
              },
            ],
          }

          chartInstance.current.setOption(option)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()

    const handleResize = () => {
      chartInstance.current?.resize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chartInstance.current?.dispose()
    }
  }, [])

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
}

export default EChartsComponent
