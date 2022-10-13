import Movie from '../interfaces/movie.interface'

export const listAll = async (getMovies: () => Promise<Movie[]>): Promise<Movie[]> => {
  const movies = await getMovies()
  return movies
}
