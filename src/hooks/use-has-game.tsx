import { useEffect, useState } from 'react'

export default function useHasGame() {
  const [hasGame, setHasGame] = useState<boolean>(
    !!sessionStorage.getItem('game-storage')
  )

  useEffect(() => {
    const handleStorageChange = () => {
      setHasGame(!!sessionStorage.getItem('game-storage'))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  return { hasGame, setHasGame }
}
