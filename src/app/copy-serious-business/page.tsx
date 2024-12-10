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
  const controlsCircle = useAnimation()

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

  const circleAnimation = {
    initial: {
      x: '-80vw',
      rotate: -360 * 3,
    },
    animate: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 3.6,
        bounce: 0.5,
      },
    },
  }

  useEffect(() => {
    const animateTitle = async () => {
      controlsCircle.start('animate')
      await delayFunction(400)
      controlsTitleLeft.start('show')
      await delayFunction(700)
      controlsTitleRight.start('show')
    }
    animateTitle()
  }, [controlsCircle, controlsTitleLeft, controlsTitleRight])

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* title area start */}
      <div className="mt-[50vh] flex w-full translate-y-[-50%] items-center justify-center text-[clamp(2rem,9vw,20rem)]">
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
          <motion.div
            variants={circleAnimation}
            initial="initial"
            animate={controlsCircle}
            className="relative h-[1em] w-[1em]"
          >
            <div className="absolute left-0 top-0 h-full w-full rounded-full bg-black"></div>
            <img
              src="https://cdn.jsdelivr.net/gh/Gaohaoyang/pics2/assets/face.png"
              className="absolute left-0 top-0 h-full w-full"
            />
          </motion.div>
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
