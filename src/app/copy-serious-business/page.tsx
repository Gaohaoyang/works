'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'motion/react'

const title = ['SERIOUS', 'BUSINESS']

const delayFunction = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

const CopySeriousBusiness = () => {
  const controlsTitleLeft = useAnimation()
  const controlsTitleRight = useAnimation()

  const titleContainerAnimationLeft = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const titleContainerAnimationRight = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  }

  const letterUpAnimation = {
    hidden: { y: '100%' },
    show: {
      y: '0%',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const circleAnimation = {}

  useEffect(() => {
    const animateTitle = async () => {
      // 在这里手动触发动画
      controlsTitleLeft.start('show')
      await delayFunction(1000)
      controlsTitleRight.start('show')
    }
    animateTitle()
  }, [])

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* title area start */}
      <div className="mt-[50vh] flex w-full translate-y-[-50%] items-center justify-center text-[clamp(2rem,10vw,20rem)]">
        <motion.div className="flex w-full justify-around overflow-hidden font-bold leading-none">
          <motion.div
            className="flex flex-1 justify-around"
            variants={titleContainerAnimationLeft}
            initial="hidden"
            animate={controlsTitleLeft}
          >
            {title[0].split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterUpAnimation}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          {/* circle start */}
          <div className="relative mx-[clamp(0.5rem,1.5vw,20rem)]">
            <div className="absolute -left-[clamp(0.1rem,0.75vw,20rem)] bottom-[clamp(0.5rem,1.5vw,20rem)] h-[clamp(0.5rem,2vw,20rem)] w-[clamp(0.1rem,2vw,20rem)] rounded-full bg-black"></div>
          </div>
          {/* circle end */}
          <motion.div
            className="flex flex-1 justify-around"
            variants={titleContainerAnimationRight}
            initial="hidden"
            animate={controlsTitleRight}
          >
            {title[1].split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterUpAnimation}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* title area end */}
    </div>
  )
}

export default CopySeriousBusiness
