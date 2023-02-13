import { useCallback, useEffect, useMemo, useState } from "react"
import { GameDataResponse, GameDataResult } from "../types"

const API_KEY = import.meta.env.VITE_APP_API_KEY
const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10&page=`

export const useGameData = () => {
  const [gameData, setGameData] = useState<GameDataResult[] | never[]>([])
  const [page, setPage] = useState(1)
  const pageUrl = useMemo(() => {
    return `${BASE_URL}${page}`
  }, [page])

  const [loading, setLoading] = useState(false)

  const fetchData = (url: string) => {
    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json() as Promise<GameDataResponse>
      })
      .then((data) => {
        setGameData((gameData) => [...gameData, ...data.results])
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false)
      })
  }

  const handleFetchMore = useCallback(() => {
    setPage((page) => page + 1)
  }, [page])

  useEffect(() => {
    fetchData(pageUrl)
  }, [pageUrl])

  return { gameData, loading, handleFetchMore }
}
