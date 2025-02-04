'use client'

import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import 'echarts-gl'

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
  { name: '601-1200', dataIndex: 0 },
  { name: '501-600', dataIndex: 1 },
  { name: '491-500', dataIndex: 3 },
  { name: '481-490', dataIndex: 4 },
  { name: '471-480', dataIndex: 5 },
  { name: '461-470', dataIndex: 6 },
  { name: '451-460', dataIndex: 7 },
  { name: '441-450', dataIndex: 9 },
  { name: '431-440', dataIndex: 10 },
  { name: '421-430', dataIndex: 11 },
  { name: '411-420', dataIndex: 12 },
  { name: '401-410', dataIndex: 13 },
  { name: '351-400', dataIndex: 14 },
  { name: '301-350', dataIndex: 15 },
  { name: '0-300', dataIndex: 16 },
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

        // Process data for 3D visualization
        const data: [number, number, number][] = []
        const dates = filteredAndSortedRounds.map((item) => item.drawDate)

        filteredAndSortedRounds.forEach((round, dateIndex) => {
          CRS_RANGES.forEach((range, rangeIndex) => {
            const ddKey = `dd${range.dataIndex + 1}` as keyof EEData
            const value = parseInt(round[ddKey].replace(/,/g, ''))
            if (value > 0) {
              data.push([dateIndex, rangeIndex, value])
            }
          })
        })

        const maxValue = Math.max(...data.map((item) => item[2]))

        if (chartRef.current) {
          if (!chartInstance.current) {
            chartInstance.current = echarts.init(chartRef.current)
          }

          interface TooltipParams {
            data: [number, number, number]
          }

          const option = {
            tooltip: {
              formatter: (params: TooltipParams) => {
                const date = dates[params.data[0]]
                const range = CRS_RANGES[params.data[1]].name
                const value = params.data[2]
                return `Date: ${date}<br/>CRS Range: ${range}<br/>Candidates: ${value.toLocaleString()}`
              },
            },
            visualMap: {
              max: maxValue,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026',
                ],
              },
            },
            xAxis3D: {
              type: 'category',
              data: dates,
              name: 'Date',
              axisLabel: {
                rotate: 45,
                interval: Math.floor(dates.length / 10),
              },
            },
            yAxis3D: {
              type: 'category',
              data: CRS_RANGES.map((range) => range.name),
              name: 'CRS Score Range',
              inverse: true,
            },
            zAxis3D: {
              type: 'value',
              name: 'Number of Candidates',
              axisLabel: {
                formatter: (value: number) => value.toLocaleString(),
              },
            },
            grid3D: {
              boxWidth: 200,
              boxHeight: 100,
              boxDepth: 120,
              viewControl: {
                // Initial rotation for better view
                beta: 15,
                alpha: 25,
                distance: 200,
                rotateSensitivity: 1.5,
                zoomSensitivity: 2,
                panSensitivity: 1.5,
                autoRotate: false,
              },
              light: {
                main: {
                  intensity: 1.2,
                  shadow: true,
                  shadowQuality: 'medium',
                },
                ambient: {
                  intensity: 0.3,
                },
              },
            },
            series: [
              {
                type: 'bar3D',
                data: data,
                shading: 'lambert',
                label: {
                  show: false,
                },
                emphasis: {
                  label: {
                    show: false,
                  },
                },
                itemStyle: {
                  opacity: 0.9,
                },
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
