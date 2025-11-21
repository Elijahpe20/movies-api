const { Actor } = require('../models');

// Obtener todos los actores
const getAllActors = async (req, res) => {
	try {
		const actors = await Actor.findAll();
		res.json(actors);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Obtener un actor por ID
const getActorById = async (req, res) => {
	try {
		const actor = await Actor.findByPk(req.params.id);
		if (!actor) {
			return res.status(404).json({ error: 'Actor no encontrado' });
		}
		res.json(actor);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// Crear un actor
const createActor = async (req, res) => {
	try {
		const actor = await Actor.create(req.body);
		res.status(201).json(actor);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Actualizar un actor
const updateActor = async (req, res) => {
	try {
		const actor = await Actor.findByPk(req.params.id);
		if (!actor) {
			return res.status(404).json({ error: 'Actor no encontrado' });
		}
		await actor.update(req.body);
		res.json(actor);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Eliminar un actor
const deleteActor = async (req, res) => {
	try {
		const actor = await Actor.findByPk(req.params.id);
		if (!actor) {
			return res.status(404).json({ error: 'Actor no encontrado' });
		}
		await actor.destroy();
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	getAllActors,
	getActorById,
	createActor,
	updateActor,
	deleteActor,
};
