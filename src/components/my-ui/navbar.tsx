'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { LuSun, LuMoon, LuHome } from 'react-icons/lu'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex h-10 items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <LuHome className="text-lg" />
          Home
        </Link>
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
  )
}

export default Navbar
