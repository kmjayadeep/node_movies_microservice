'use strict'

module.exports = (app, options) => {
  const { repo } = options

  app.get('/movies', (req, res, next) => {
    repo.getAllMovies().then(movies => {
      res.json(movies)
    }).catch(next)
  })

  app.get('/movies/premieres', (req, res, next) => {
    repo.getMoviePremiers().then(movies => {
      res.json(movies)
    }).catch(next)
  })

  app.get('/movies/:id', (req, res, next) => {
    repo.getMovieById(req.params.id).then(movies => {
      res.json(movies)
    }).catch(next)
  })
}
