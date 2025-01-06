'use client'

import { InstagramEmbed } from './components/InstagramEmbed'
import { data } from './data'
import { useState } from 'react'

export default function InstagramPage() {
  const [columns, setColumns] = useState(3)

  const toggleColumns = () => {
    setColumns((current) => (current === 3 ? 4 : 3))
  }

  const columnClass = columns === 3
    ? 'columns-1 md:columns-2 lg:columns-3'
    : 'columns-1 md:columns-2 lg:columns-4'

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Instagram 展示墙</h1>
        <button
          onClick={toggleColumns}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          {columns}列显示
        </button>
      </div>
      <div className={`${columnClass} gap-6`}>
        {data.map((item, index) => (
          <div
            key={index}
            className="mb-6 w-full break-inside-avoid rounded-lg bg-gray-50 shadow-sm"
          >
            <InstagramEmbed url={item.link} />
          </div>
        ))}
      </div>
    </div>
  )
}
