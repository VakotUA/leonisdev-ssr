import { useEffect, useState } from 'react'

type ReturnType = [boolean, (locked: boolean) => void]

export function useLockedBody(initialLocked = false): ReturnType {
  const [locked, setLocked] = useState(initialLocked)

  useEffect(() => {
    locked
      ? document.body.classList.add('scroll-lock')
      : document.body.classList.remove('scroll-lock')

    const root = document.getElementById('root')
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0
    const originalPaddingRight = document.body.style.paddingRight

    document.body.style.paddingRight = scrollBarWidth
      ? `${scrollBarWidth}px`
      : originalPaddingRight
  }, [locked])

  return [locked, setLocked]
}
