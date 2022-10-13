import Movie from '../interfaces/movie.interface'
import { getDirectories } from '../utils/files'

const movieDir = '/storage/movies/'

export const getAll = async (): Promise<Movie[]> => {
  const movies: Movie[] = []
  const dirs = await getDirectories(movieDir)
  dirs.forEach(file => {
    if (file.match(/\((.*)\)/) !== null) {
      movies.push({
        name: file.split(' (')[0],
        year: file.match(/\((.*)\)/)[1],
        path: movieDir + file,
      })
    }
  })
  return movies
}
