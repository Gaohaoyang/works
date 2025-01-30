'use client'
import dynamic from 'next/dynamic'

// Dynamically import the ECharts component to avoid SSR issues
const EChartsComponent = dynamic(() => import('./EChartsComponent'), {
  ssr: false,
})

const EE = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Express Entry Draws</h1>
      <div className="h-[600px] w-full">
        <EChartsComponent />
      </div>
    </div>
  )
}

export default EE
