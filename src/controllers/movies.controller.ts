import { NextFunction, Request, Response } from 'express'
import * as service from '../services/movies.service'
import * as repo from '../repo/movies.repo'

class MoviesController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).send('Movies!')
    } catch (error) {
      next(error)
    }
  }
  public list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const year = req.query.year?.toString()
      const name = req.query.name?.toString()
      const movies = await service.list(repo.getAll, year, name)
      res.status(200).send(movies)
    } catch (error) {
      next(error)
    }
  }
}

export default MoviesController
