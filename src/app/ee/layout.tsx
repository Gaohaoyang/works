import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '加拿大移民分析',
  description: '加拿大移民分析',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default Layout
