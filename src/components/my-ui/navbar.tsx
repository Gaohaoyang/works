'use client'
import React from 'react'
import { LuSun, LuMoon, LuHome } from 'react-icons/lu'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { Button } from '@nextui-org/button'
import { FaGithub } from 'react-icons/fa6'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  return (
    <>
      <div className="fixed top-0 z-50 flex h-10 w-full items-center justify-center bg-white shadow shadow-slate-500/60 dark:bg-slate-900">
        <div className="container flex h-10 items-center justify-between">
          <div className="">
            <Button
              className="flex items-center gap-2 font-semibold"
              variant="light"
              onClick={() => router.push('/')}
            >
              <LuHome className="text-lg" />
              Home
            </Button>
          </div>
          <div>
            <Button
              isIconOnly
              variant="light"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <LuSun className="text-lg opacity-0 transition-opacity dark:opacity-100" />
              <LuMoon className="absolute text-lg opacity-100 transition-opacity dark:opacity-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              isIconOnly
              variant="light"
              onClick={() =>
                window.open(
                  'https://github.com/Gaohaoyang/works',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
            >
              <FaGithub className="text-lg" />
              <span className="sr-only">Github</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-10"></div>
    </>
  )
}

export default Navbar
