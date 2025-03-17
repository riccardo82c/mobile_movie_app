export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}

export const fetchMovies = async ({ query }: { query: string }) => {

  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=it-IT`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&language=it-IT`

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers
  })

  if (!response.ok) {

    const error = new Error(response.statusText)
    error.name = 'Failed to fetch movie'
    throw error
  }

  const data = await response.json()

  return data.results
}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {

  try {
    const response = await fetch(`${TMDB_CONFIG.BASE_URL}movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}&language=it-IT`, {
      method: 'GET',
      headers: TMDB_CONFIG.headers
    })

    if (!response.ok) {
      const error = new Error(response.statusText)
      error.name = 'Failed to fetch movie details'
      throw error
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    throw error

  }
}
