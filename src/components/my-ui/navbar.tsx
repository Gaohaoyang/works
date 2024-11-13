'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { LuSun, LuMoon, LuHome } from 'react-icons/lu'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  return (
    <div className="flex h-10 items-center justify-center shadow">
      <div className="container flex h-10 items-center justify-between">
        <div className="">
          <Button
            variant="ghost"
            // href="/"
            className="flex items-center gap-2 font-semibold"
            onClick={() => router.push('/')}
          >
            <LuHome className="text-lg" />
            Home
          </Button>
        </div>
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <LuSun className="text-lg opacity-0 transition-opacity dark:opacity-100" />
            <LuMoon className="absolute text-lg opacity-100 transition-opacity dark:opacity-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
