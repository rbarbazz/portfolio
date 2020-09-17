import React, { useState, useEffect } from 'react'

import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

const ThemeToggle = () => {
  const [isDarkTheme, toggleDarkTheme] = useState(false)
  const onClickFn = () =>
    toggleDarkTheme((prevState) => {
      if (!prevState) {
        localStorage.setItem('theme', 'dark')
        document.body.classList.add('dark-theme')
      } else {
        localStorage.setItem('theme', 'light')
        document.body.classList.remove('dark-theme')
      }

      return !prevState
    })

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') {
      document.body.classList.add('dark-theme')
      toggleDarkTheme(true)
    }
  }, [])

  return (
    <button onClick={onClickFn}>
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggle
