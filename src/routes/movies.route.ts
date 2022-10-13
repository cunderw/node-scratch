import { Router } from 'express'
import MoviesController from '../controllers/movies.controller'
import { Routes } from '../interfaces/routes.interface'

class MoviesRoute implements Routes {
  public path = '/movies'
  public router = Router()
  public moviesController = new MoviesController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.moviesController.index)
    this.router.get(`${this.path}/list`, this.moviesController.list)
  }
}

export default MoviesRoute
