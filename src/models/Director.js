const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Director = sequelize.define(
	'Director',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		nationality: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		birthday: {
			type: DataTypes.DATEONLY,
			allowNull: true,
		},
	},
	{
		tableName: 'directors',
		timestamps: true,
	},
);

module.exports = Director;
