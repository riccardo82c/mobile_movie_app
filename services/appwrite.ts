import { Client, Databases, ID, Query } from 'appwrite'

// track the searches made by user
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new Databases(client)

export const updateSearchCount = async (query: string, movie: Movie) => {
  console.log('updating search count', query)

  try {
    // Cambiato: ora cerchiamo per movie_id invece che per searchTerm
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('movie_id', movie.id)
    ])

    if (result.documents.length > 0) {
      console.log('updateDocument')

      const existingMovie = result.documents[0]

      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
          // Opzionale: aggiorna anche il termine di ricerca più recente
          searchTerm: query
        }
      )
    } else {
      console.log('createDocument')

      await database.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          searchTerm: query,
          count: 1,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          title: movie.title,
        }
      )
    }

  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {

  try {

    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc('count')
    ])

    return result.documents as unknown as TrendingMovie[]

  } catch (error) {
    console.log(error)
    throw error

  }

}
