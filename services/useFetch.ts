import { useEffect, useState, useCallback } from "react"
import { useFocusEffect } from "@react-navigation/native"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const result = await fetchFunction()
      setData(result)
      return result
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An error occurred'))
      return null
    } finally {
      setLoading(false)
    }
  }, [fetchFunction])

  const reset = () => {
    setData(null)
    setError(null)
    setLoading(false)
  }

  // Primo caricamento al mount se autoFetch è true
  useEffect(() => {
    if (autoFetch) {
      fetchData()
    }
  }, [])

  // Se autoFetch è true, esegui anche il fetch quando la schermata ottiene il focus
  useFocusEffect(
    useCallback(() => {
      if (autoFetch) {
        fetchData()
      }
    }, [])
  )

  return { data, loading, error, refetch: fetchData, reset }
}

export default useFetch
