'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'motion/react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text3D, OrthographicCamera } from '@react-three/drei'
import { DirectionalLight } from 'three'

const title = ['PREMIUM', 'CONTENT']

const delayFunction = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

// 创建一个新组件来处理光源
const DirectionalLightWithMouse = () => {
  const light = useRef<DirectionalLight>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (light.current) {
      // 使用lerp实现平滑过渡
      light.current.position.x +=
        (mouse.current.x * 10 - light.current.position.x) * 0.1
      light.current.position.y +=
        (mouse.current.y * 10 - light.current.position.y) * 0.1
    }
  })

  return (
    <directionalLight
      ref={light}
      position={[0, 0, 5]}
      castShadow
      intensity={10}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-near={0.1}
      shadow-camera-far={1000}
    />
  )
}

// 创建一个相机控制组件
const CameraController = () => {
  const { viewport, camera } = useThree()

  useEffect(() => {
    // 根据视口宽度调整相机
    const aspect = viewport.width / viewport.height
    const zoom = Math.min(1, aspect) * 160 // 调整缩放系数

    // 更新相机位置和缩放
    camera.zoom = zoom
    camera.updateProjectionMatrix()
  }, [viewport, camera])

  return null
}

const CopySeriousBusiness = () => {
  const controlsTitleLeft = useAnimation()
  const controlsTitleRight = useAnimation()
  const controlsCircle = useAnimation()
  const controlsTitleContainer = useAnimation()
  const controlsCircleImage = useAnimation()
  const controlsSubtitle = useAnimation()
  const controlsCanvas = useAnimation()

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

  const canvasAnimation = {
    initial: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
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
      controlsCanvas.start('show')
    }
    animateTitle()
  }, [
    controlsCircle,
    controlsTitleLeft,
    controlsTitleRight,
    controlsSubtitle,
    controlsTitleContainer,
    controlsCircleImage,
    controlsCanvas,
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

      <motion.div
        variants={canvasAnimation}
        initial="initial"
        animate={controlsCanvas}
        className="absolute left-0 top-0 h-full w-full"
      >
        <Canvas
          shadows
          gl={{
            antialias: true,
          }}
          camera={{
            position: [0, 0, 10],
            near: 0.1,
            far: 1000,
            zoom: 3,
          }}
          className="h-full w-full"
        >
          <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={3} />
          <CameraController />

          {/* box */}
          <mesh
            rotation={[1, 1, 1]}
            position={[0, 0, 0.5]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#e0e0e0" />
          </mesh>

          {/* sphere */}
          <mesh position={[2, 0, 0.5]} castShadow receiveShadow>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#e0e0e0" />
          </mesh>

          {/* cone */}
          <mesh
            position={[-2, 0.1, 0.5]}
            rotation={[-0.2, 0, 0]}
            castShadow
            receiveShadow
          >
            <coneGeometry args={[0.5, 1, 32]} />
            <meshStandardMaterial color="#e0e0e0" />
          </mesh>

          {/* 3D text */}
          <Text3D
            font="https://gaohaoyang.github.io/threeJourney/assets/fonts/Fira%20Code%20Medium_Regular.json"
            position={[-2, -1.2, 0]}
            scale={0.3}
            castShadow
            receiveShadow
          >
            {"Haoyang's Demo"}
            <meshStandardMaterial color="#e0e0e0" />
          </Text3D>

          {/* plane */}
          <mesh rotation={[0, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#fff" />
          </mesh>

          <ambientLight intensity={2.6} />
          <DirectionalLightWithMouse />
        </Canvas>
      </motion.div>
    </div>
  )
}

export default CopySeriousBusiness
