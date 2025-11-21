const sequelize = require('../config/database');
const Genre = require('./Genre');
const Actor = require('./Actor');
const Director = require('./Director');
const Movie = require('./Movie');

// Relaciones Many-to-Many

// Movie - Genre
Movie.belongsToMany(Genre, { through: 'movie_genres', foreignKey: 'movieId' });
Genre.belongsToMany(Movie, { through: 'movie_genres', foreignKey: 'genreId' });

// Movie - Actor
Movie.belongsToMany(Actor, { through: 'movie_actors', foreignKey: 'movieId' });
Actor.belongsToMany(Movie, { through: 'movie_actors', foreignKey: 'actorId' });

// Movie - Director
Movie.belongsToMany(Director, {
	through: 'movie_directors',
	foreignKey: 'movieId',
});
Director.belongsToMany(Movie, {
	through: 'movie_directors',
	foreignKey: 'directorId',
});

module.exports = {
	sequelize,
	Genre,
	Actor,
	Director,
	Movie,
};
