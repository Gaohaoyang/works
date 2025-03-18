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
      <h1 className="mb-4 text-2xl font-bold">加拿大移民分析</h1>
      <div className="container mx-auto">
        <Ads />
        <div className="mx-auto flex h-[600px] w-[70%] flex-col items-center overflow-hidden rounded-xl border shadow">
          <h1 className="mt-3 text-2xl font-bold">加拿大 EE 分数分布情况</h1>
          <div className="w-full flex-1">
            <EChartsComponent />
          </div>
        </div>
        <div
          className="mx-auto mt-3 w-full"
          dangerouslySetInnerHTML={{
            __html: `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9139027259917346"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-9139027259917346"
     data-ad-slot="6692975821"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          `,
          }}
        ></div>
      </div>
    </div>
  )
}

export default EE
