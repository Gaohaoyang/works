'use client'
import dynamic from 'next/dynamic'

// Dynamically import the ECharts component to avoid SSR issues
const EChartsComponent = dynamic(() => import('./EChartsComponent'), {
  ssr: false,
})

const EE = () => {
  return (
    <div className="mx-auto p-4 min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">Express Entry Draws</h1>
      <div className="h-[calc(100vh-8rem)] w-full">
        <EChartsComponent />
      </div>
    </div>
  )
}

export default EE
