const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

const genreRoutes = require('./routes/genreRoutes');
const actorRoutes = require('./routes/actorRoutes');
const directorRoutes = require('./routes/directorRoutes');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
	res.json({ message: 'Movies API funcionando!' });
});

app.use('/genres', genreRoutes);
app.use('/actors', actorRoutes);
app.use('/directors', directorRoutes);
app.use('/movies', movieRoutes);

// Iniciar servidor y conectar a la base de datos
sequelize
	.authenticate()
	.then(() => {
		console.log('✅ Conexión a la base de datos exitosa');
		app.listen(PORT, () => {
			console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.error('❌ Error al conectar a la base de datos:', err);
	});

module.exports = app;
