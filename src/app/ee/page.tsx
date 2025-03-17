'use client'
import dynamic from 'next/dynamic'
import Ads from '@/components/ads'

// Dynamically import the ECharts component to avoid SSR issues
const EChartsComponent = dynamic(() => import('./EChartsComponent'), {
  ssr: false,
})

const EE = () => {
  return (
    <div className="mx-auto min-h-screen p-4 pb-48">
      <h1 className="mb-4 text-2xl font-bold">Express Entry Draws</h1>
      <div className="container mx-auto">
        <Ads />
        <div className="h-[600px] w-full bg-slate-100">
          <EChartsComponent />
        </div>
      </div>
    </div>
  )
}

export default EE
