"use client"

import React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { useEffect, useState } from 'react'

const ModeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensures the theme is loaded on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative transition-colors duration-300"
    >
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
      />
      <MoonIcon
        className={`h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}
      />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  )
}

export default ModeToggler
