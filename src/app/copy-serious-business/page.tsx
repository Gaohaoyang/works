'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'motion/react'
import { Canvas } from '@react-three/fiber'

const title = ['PREMIUM', 'CONTENT']

const delayFunction = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

const CopySeriousBusiness = () => {
  const controlsTitleLeft = useAnimation()
  const controlsTitleRight = useAnimation()
  const controlsCircle = useAnimation()
  const controlsTitleContainer = useAnimation()
  const controlsCircleImage = useAnimation()
  const controlsSubtitle = useAnimation()

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

  const subtitleAnimation = {
    hidden: { opacity: 0, y: '100%' },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
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
      await delayFunction(1400)
      controlsTitleContainer.start('toTop')
      controlsCircle.start('toTop')
      controlsCircleImage.start('opacity')
      controlsTitleLeft.start('toTop')
      controlsTitleRight.start('toTop')
      await delayFunction(600)
      controlsSubtitle.start('show')
    }
    animateTitle()
  }, [
    controlsCircle,
    controlsTitleLeft,
    controlsTitleRight,
    controlsSubtitle,
    controlsTitleContainer,
    controlsCircleImage,
  ])

  return (
    <div className="h-screen w-screen overflow-hidden p-2">
      {/* title area start */}
      <motion.div
        variants={titleContainerAnimation}
        initial="initial"
        animate={controlsTitleContainer}
        className="relative z-10 flex w-full items-center justify-center text-[clamp(2rem,8.8vw,20rem)] drop-shadow-lg"
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
      {/* subtitle area start */}
      <motion.div
        variants={subtitleAnimation}
        initial="hidden"
        animate={controlsSubtitle}
        className="relative z-10 mt-2 text-center drop-shadow"
      >
        <div className="text-3xl font-bold">
          Subtitle lorem ipsum dolor sit amet
        </div>
        <div className="text-lg">
          lorem ipsum dolor sit amet consectetur adipiscing elit
        </div>
      </motion.div>
      {/* subtitle area end */}

      <div className="absolute left-0 top-0 h-full w-full">
        <Canvas shadows>
          <mesh rotation={[1, 1, 1]} position={[0, 0, 1]} castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#fff" />
          </mesh>

          {/* plane */}
          <mesh rotation={[0, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="#fff" />
          </mesh>

          {/* 添加坐标轴辅助器 */}
          {/* x轴-红色, y轴-绿色, z轴-蓝色 */}
          {/* <group position={[2, -2, 0]} scale={0.4}>
            <axesHelper args={[5]} />
          </group> */}

          <ambientLight intensity={2} />
          <directionalLight
            position={[0, 10, 5]}
            castShadow
            intensity={5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.1}
            shadow-camera-far={1000}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default CopySeriousBusiness
