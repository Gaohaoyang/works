'use client'

import { InstagramEmbed } from './components/InstagramEmbed'
import { data } from './data'
import { useEffect, useRef } from 'react'

export default function InstagramPage() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeAllGridItems = () => {
      const allItems = document.getElementsByClassName('grid-item')
      for (let i = 0; i < allItems.length; i++) {
        resizeGridItem(allItems[i] as HTMLElement)
      }
    }

    const resizeGridItem = (item: HTMLElement) => {
      const grid = gridRef.current
      const rowHeight = parseInt(window.getComputedStyle(grid!).getPropertyValue('grid-auto-rows'))
      const rowGap = parseInt(window.getComputedStyle(grid!).getPropertyValue('gap'))
      const contentHeight = item.querySelector('.content')?.getBoundingClientRect().height
      if (contentHeight) {
        const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap))
        item.style.gridRowEnd = `span ${rowSpan}`
      }
    }

    // 初始检查和定期重试
    let checkCount = 0
    const maxChecks = 20 // 最多检查20次
    const checkInterval = 1000 // 每秒检查一次

    const checkTimer = setInterval(() => {
      resizeAllGridItems()
      checkCount++

      if (checkCount >= maxChecks) {
        clearInterval(checkTimer)
      }
    }, checkInterval)

    // 监听窗口大小变化
    window.addEventListener('resize', resizeAllGridItems)

    // 使用 ResizeObserver 监听内容变化
    const observer = new ResizeObserver(() => {
      resizeAllGridItems()
    })

    const gridItems = document.getElementsByClassName('grid-item')
    for (let i = 0; i < gridItems.length; i++) {
      observer.observe(gridItems[i])
    }

    // 监听 message 事件，用于 Instagram 嵌入内容的加载完成通知
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'INSTAGRAM_EMBED_SIZE') {
        resizeAllGridItems()
      }
    }
    window.addEventListener('message', handleMessage)

    return () => {
      clearInterval(checkTimer)
      window.removeEventListener('resize', resizeAllGridItems)
      window.removeEventListener('message', handleMessage)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Instagram 展示墙2</h1>
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        style={{ gridAutoRows: '0px' }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="grid-item w-full"
          >
            <div className="content w-full">
              <InstagramEmbed url={item.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
