import { NextFunction, Request, Response } from 'express'
import * as service from '../services/movies.service'

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
      const movies = await service.listAll()
      res.status(200).send(movies)
    } catch (error) {
      next(error)
    }
  }
}

export default MoviesController
