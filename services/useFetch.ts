import { useEffect, useState } from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const result = await fetchFunction()
      setData(result)
      return result // Restituisci i risultati
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An error occurred'))
      return null
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setData(null)
    setError(null)
    setLoading(false)
  }

  useEffect(() => {
    if (autoFetch) {
      fetchData()
    }
  }, [])

  return { data, loading, error, refetch: fetchData, reset }

}

export default useFetch
