import { useEffect } from 'react'
import { lenis } from '../lib/lenis'

export function useLenis(callback?: (instance: typeof lenis) => void) {
  useEffect(() => {
    if (!callback) return
    const handler = () => {
      callback(lenis)
    }
    lenis.on('scroll', handler)
    return () => {
      lenis.off('scroll', handler)
    }
  }, [callback])

  return lenis
}
