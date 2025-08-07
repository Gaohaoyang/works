'use client'
import { show, hide } from '@intercom/messenger-js-sdk'
import React from 'react'

const TestHeader = () => {
  return (
    <div className="sticky top-0 h-10 w-full bg-red-200">
      TestHeader
      <button onClick={() => show()}>Show</button>
      <button onClick={() => hide()}>Hide</button>
    </div>
  )
}

export default TestHeader
