const { Movie, Genre, Actor, Director } = require('../models');

// Obtener todas las películas con sus relaciones
const getAllMovies = async (req, res) => {
	try {
		const movies = await Movie.findAll({
			include: [
				{ model: Genre, through: { attributes: [] } },
				{ model: Actor, through: { attributes: [] } },
				{ model: Director, through: { attributes: [] } },
			],
		});
		res.json(movies);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Obtener una película por ID con sus relaciones
const getMovieById = async (req, res) => {
	try {
		const movie = await Movie.findByPk(req.params.id, {
			include: [
				{ model: Genre, through: { attributes: [] } },
				{ model: Actor, through: { attributes: [] } },
				{ model: Director, through: { attributes: [] } },
			],
		});
		if (!movie) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		res.json(movie);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Crear una película
const createMovie = async (req, res) => {
	try {
		const movie = await Movie.create(req.body);
		res.status(201).json(movie);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Actualizar una película
const updateMovie = async (req, res) => {
	try {
		const movie = await Movie.findByPk(req.params.id);
		if (!movie) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		await movie.update(req.body);
		res.json(movie);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Eliminar una película
const deleteMovie = async (req, res) => {
	try {
		const movie = await Movie.findByPk(req.params.id);
		if (!movie) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		await movie.destroy();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Agregar géneros a una película
const addGenresToMovie = async (req, res) => {
	try {
		const movie = await Movie.findByPk(req.params.id);
		if (!movie) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		const genreIds = req.body; // Array de IDs
		await movie.addGenres(genreIds);
		const updatedMovie = await Movie.findByPk(req.params.id, {
			include: [{ model: Genre, through: { attributes: [] } }],
		});
		res.json(updatedMovie);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Agregar actores a una película
const addActorsToMovie = async (req, res) => {
	try {
		const movie = await Movie.findByPk(req.params.id);
		if (!movie) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		const actorIds = req.body; // Array de IDs
		await movie.addActors(actorIds);
		const updatedMovie = await Movie.findByPk(req.params.id, {
			include: [{ model: Actor, through: { attributes: [] } }],
		});
		res.json(updatedMovie);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Agregar directores a una película
const addDirectorsToMovie = async (req, res) => {
	try {
		const movie = await Movie.findByPk(req.params.id);
		if (!movie) {
			return res.status(404).json({ error: 'Película no encontrada' });
		}
		const directorIds = req.body; // Array de IDs
		await movie.addDirectors(directorIds);
		const updatedMovie = await Movie.findByPk(req.params.id, {
			include: [{ model: Director, through: { attributes: [] } }],
		});
		res.json(updatedMovie);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	getAllMovies,
	getMovieById,
	createMovie,
	updateMovie,
	deleteMovie,
	addGenresToMovie,
	addActorsToMovie,
	addDirectorsToMovie,
};
