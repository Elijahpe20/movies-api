const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define(
	'Movie',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		synopsis: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		release_year: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		tableName: 'movies',
		timestamps: true,
	},
);

module.exports = Movie;
