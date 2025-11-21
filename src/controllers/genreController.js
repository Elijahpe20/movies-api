const { Genre } = require('../models');

// Obtener todos los géneros
const getAllGenres = async (req, res) => {
	try {
		const genres = await Genre.findAll();
		res.json(genres);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Obtener un género por ID
const getGenreById = async (req, res) => {
	try {
		const genre = await Genre.findByPk(req.params.id);
		if (!genre) {
			return res.status(404).json({ error: 'Género no encontrado' });
		}
		res.json(genre);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Crear un género
const createGenre = async (req, res) => {
	try {
		const genre = await Genre.create(req.body);
		res.status(201).json(genre);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Actualizar un género
const updateGenre = async (req, res) => {
	try {
		const genre = await Genre.findByPk(req.params.id);
		if (!genre) {
			return res.status(404).json({ error: 'Género no encontrado' });
		}
		await genre.update(req.body);
		res.json(genre);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Eliminar un género
const deleteGenre = async (req, res) => {
	try {
		const genre = await Genre.findByPk(req.params.id);
		if (!genre) {
			return res.status(404).json({ error: 'Género no encontrado' });
		}
		await genre.destroy();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAllGenres,
	getGenreById,
	createGenre,
	updateGenre,
	deleteGenre,
};
