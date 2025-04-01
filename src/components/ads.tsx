'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { addToast } from '@heroui/react'

const Ads = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="my-8 grid gap-4 md:grid-cols-3">
      {/* PTE Discount Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            PTE 考试优惠
          </h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            广告 Ad
          </span>
        </div>
        <div
          className="mb-4 cursor-pointer rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20"
          onClick={() => {
            // 复制
            navigator.clipboard.writeText('NR005')
            addToast({
              title: '优惠码 NR005 已复制到剪贴板',
              description: '请在PTE考试官网使用',
              color: 'success',
            })
          }}
        >
          <p className="text-sm text-slate-600 dark:text-slate-300">
            PTE 8.8折优惠码：
            <code className="ml-2 font-bold text-blue-600 dark:text-blue-400">
              NR005
            </code>
          </p>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          可用于预约2025年12月31日以前PTE-Core, PTE A, PTE UKVI的线下考试
          <br />
          中国地区包含中国的港澳台都能使用
        </p>
      </motion.div>

      {/* VPN Service Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            科学上网无缝体验真实的互联网
          </h3>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900 dark:text-blue-300">
            广告 Ad
          </span>
        </div>
        <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <Link
              href="https://portal.shadowsocks.au/aff.php?aff=22354"
              target="_blank"
              rel="noopener noreferrer"
              // className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              稳定可靠的代理服务，物美价廉的梯子 <br />
              https://portal.shadowsocks.au/aff.php?aff=22354
            </Link>
          </p>
        </div>
        <Link
          href="https://portal.shadowsocks.au/aff.php?aff=22354"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-900 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          了解更多
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
        dangerouslySetInnerHTML={{
          __html: `
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9139027259917346"
     crossorigin="anonymous"></script>
<!-- ee-page1 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9139027259917346"
     data-ad-slot="8971115804"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          `,
        }}
      ></motion.div>
    </div>
  )
}

export default Ads
