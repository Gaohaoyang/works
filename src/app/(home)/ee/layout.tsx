import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    '加拿大移民分析 | EE 分数分布情况 | CRS score distribution of candidates in the Express Entry pool',
  description:
    'CRS score distribution of candidates in the pool | 加拿大移民分析与Express Entry分数分布详情，帮助您了解EE打分系统和移民趋势',
  keywords: [
    'CRS score distribution of candidates in the pool',
    'EE 分数分布',
    '加拿大移民',
    'Express Entry',
    'EE打分',
    '移民分析',
    'Canadian immigration',
    'Immigration analysis',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}

export default Layout
