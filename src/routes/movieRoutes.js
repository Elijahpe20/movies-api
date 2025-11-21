const express = require('express');
const router = express.Router();
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  addGenresToMovie,
  addActorsToMovie,
  addDirectorsToMovie
} = require('../controllers/movieController');

router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

// Rutas para agregar relaciones
router.post('/:id/genres', addGenresToMovie);
router.post('/:id/actors', addActorsToMovie);
router.post('/:id/directors', addDirectorsToMovie);

module.exports = router;