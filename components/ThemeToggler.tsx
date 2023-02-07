'use client'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className='w-8 h-8 flex items-center justify-center transition-all duration-300'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Toggle theme'
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
