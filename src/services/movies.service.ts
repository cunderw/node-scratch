import Movie from '../interfaces/movie.interface'

export const list = async (getMovies: () => Promise<Movie[]>, year: string, name: string): Promise<Movie[]> => {
  let movies = await getMovies()
  if (year !== undefined) {
    movies = movies.filter(movie => {
      return movie.year === year
    })
  }
  if (name !== undefined) {
    movies = movies.filter(movie => {
      return movie.name.toLowerCase().indexOf(name.toLowerCase()) >= 0
    })
  }
  return movies
}
