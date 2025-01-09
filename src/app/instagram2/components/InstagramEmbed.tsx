'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void
      }
    }
  }
}

interface InstagramEmbedProps {
  url: string
  captioned?: boolean
}

export function InstagramEmbed({
  url,
  captioned = false,
}: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    )
    let script: HTMLScriptElement

    if (!existingScript) {
      script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      script = existingScript as HTMLScriptElement
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }

    const container = containerRef.current
    if (container) {
      container.innerHTML = `<blockquote
        class="instagram-media"
        data-instgrm-permalink="${url}"
        data-instgrm-version="14"
        ${captioned ? 'data-instgrm-captioned' : ''}
        style="
          background:#FFF;
          border:0;
          border-radius:3px;
          box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15);
          margin: 0 !important;
          padding:0;
          width:100% !important;
        "
      ></blockquote>`
    }

    return () => {
      if (!existingScript && script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [url, captioned])

  return (
    <div className="instagram-post-container w-full">
      <div ref={containerRef} className="instagram-embed-container w-full" />
      <style jsx global>{`
        .instagram-media {
          min-width: 0 !important;
          max-width: none !important;
          width: 100% !important;
          margin: 0 !important;
        }
        .instagram-media-rendered {
          min-width: 0 !important;
          max-width: none !important;
          width: 100% !important;
          margin: 0 !important;
        }
      `}</style>
    </div>
  )
}
