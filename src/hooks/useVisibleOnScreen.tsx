import { RefObject, useEffect, useMemo, useState } from "react"

export const useVisibleOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)),
    [ref]
  )

  useEffect(() => {
    observer.observe(ref.current as Element)
    return () => observer.disconnect()
  }, [])

  return isVisible
}
