const { Director } = require('../models');

// Obtener todos los directores
const getAllDirectors = async (req, res) => {
	try {
		const directors = await Director.findAll();
		res.json(directors);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Obtener un director por ID
const getDirectorById = async (req, res) => {
	try {
		const director = await Director.findByPk(req.params.id);
		if (!director) {
			return res.status(404).json({ error: 'Director no encontrado' });
		}
		res.json(director);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Crear un director
const createDirector = async (req, res) => {
	try {
		const director = await Director.create(req.body);
		res.status(201).json(director);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Actualizar un director
const updateDirector = async (req, res) => {
	try {
		const director = await Director.findByPk(req.params.id);
		if (!director) {
			return res.status(404).json({ error: 'Director no encontrado' });
		}
		await director.update(req.body);
		res.json(director);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Eliminar un director
const deleteDirector = async (req, res) => {
	try {
		const director = await Director.findByPk(req.params.id);
		if (!director) {
			return res.status(404).json({ error: 'Director no encontrado' });
		}
		await director.destroy();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAllDirectors,
	getDirectorById,
	createDirector,
	updateDirector,
	deleteDirector,
};
