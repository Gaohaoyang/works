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
  const controlsTitleContainer = useAnimation()
  const controlsCircleImage = useAnimation()

  const titleContainerAnimationLeft = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    toTop: {
      scale: 1.09,
      x: '2.2vw',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
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
    toTop: {
      scale: 1.09,
      x: '-2.2vw',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
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
    toTop: {
      scale: 0.2,
      y: '2.5vw',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  }

  const circleImageAnimation = {
    opacity: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  }

  const titleContainerAnimation = {
    initial: {
      y: 'calc(50vh - 50%)',
    },
    toTop: {
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  }

  useEffect(() => {
    const animateTitle = async () => {
      controlsCircle.start('animate')
      await delayFunction(300)
      controlsTitleLeft.start('show')
      await delayFunction(700)
      controlsTitleRight.start('show')
      await delayFunction(1200)
      controlsTitleContainer.start('toTop')
      controlsCircle.start('toTop')
      controlsCircleImage.start('opacity')
      controlsTitleLeft.start('toTop')
      controlsTitleRight.start('toTop')
    }
    animateTitle()
  }, [controlsCircle, controlsTitleLeft, controlsTitleRight])

  return (
    <div className="h-screen w-screen overflow-hidden p-2">
      {/* title area start */}
      <motion.div
        variants={titleContainerAnimation}
        initial="initial"
        animate={controlsTitleContainer}
        className="flex w-full items-center justify-center text-[clamp(2rem,8.8vw,20rem)]"
      >
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
            className="relative mx-[0.1em] h-[1em] w-[1em] rounded-full bg-black"
          >
            <motion.img
              variants={circleImageAnimation}
              animate={controlsCircleImage}
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
      </motion.div>
      {/* title area end */}
    </div>
  )
}

export default CopySeriousBusiness
