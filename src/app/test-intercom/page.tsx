'use client'
import React, { useEffect } from 'react'
import TestHeader from '@/components/my-ui/test-header'
import Intercom from '@intercom/messenger-js-sdk'

const TestIntercom = () => {
  useEffect(() => {
    //Set your APP_ID
    const APP_ID = 'ecahpwf5'
    // const APP_ID = 'abc123'

    // ...

    Intercom({
      app_id: APP_ID,
      email: 'example@example.com',
      user_id: 'abc123',
      created_at: 1234567890,
      // alignment: 'left', // Left or right position on the page
      // horizontal_padding: 0, // Horizontal padding
      // vertical_padding: 0, // Vertical padding
      hide_default_launcher: true,
    })
  }, [])
  return (
    <div>
      <TestHeader />
      <div className="h-96 w-full bg-blue-100">hi1</div>
      <div className="h-96 w-full bg-blue-100">hi2</div>
      <div className="h-96 w-full bg-blue-100">hi3</div>
      <div className="h-96 w-full bg-blue-100">hi4</div>
    </div>
  )
}

export default TestIntercom
