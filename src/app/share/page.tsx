'use client'

import React from 'react'
import { Button } from '@heroui/react'

const Share = () => {
  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          console.log('Share')
          const params = {
            funcName: 'openSystemShare',
            params: {
              title: 'title',
              desc: 'desc',
              link: 'https://gaohaoyang.github.io/works/copy-serious-business',
              imgUrl:
                'https://cdn.jsdelivr.net/gh/Gaohaoyang/pics2/assets/face.png',
              notShortUrl: 'true',
            },
          }
          console.log(params)
          console.log(JSON.stringify(params))
          // @ts-expect-error test
          window.ReactNativeWebView?.postMessage(JSON.stringify(params))
        }}
      >
        Share
      </Button>
    </div>
  )
}

export default Share
