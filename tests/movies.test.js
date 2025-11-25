const request = require('supertest');
const app = require('../src/index');

describe('Movies endpoints', () => {
	let movieId;
	let genreId;
	let actorId;
	let directorId;

	// Crear datos necesarios antes de los tests
	beforeAll(async () => {
		// Crear un género
		const genreResponse = await request(app)
			.post('/genres')
			.send({ name: 'Test Genre' });
		genreId = genreResponse.body.id;

		// Crear un actor
		const actorResponse = await request(app).post('/actors').send({
			first_name: 'Test',
			last_name: 'Actor',
			nationality: 'American',
			image: 'https://example.com/actor.jpg',
			birthday: '1990-01-01',
		});
		actorId = actorResponse.body.id;

		// Crear un director
		const directorResponse = await request(app).post('/directors').send({
			first_name: 'Test',
			last_name: 'Director',
			nationality: 'American',
			image: 'https://example.com/director.jpg',
			birthday: '1980-01-01',
		});
		directorId = directorResponse.body.id;
	});

	// Test 1: GET /movies
	test('GET /movies should return all movies', async () => {
		const response = await request(app).get('/movies');
		expect(response.status).toBe(200);
		expect(Array.isArray(response.body)).toBe(true);
	});

	// Test 2: POST /movies
	test('POST /movies should create a new movie', async () => {
		const newMovie = {
			name: 'Test Movie',
			image: 'https://example.com/movie.jpg',
			synopsis: 'This is a test movie',
			release_year: 2024,
		};
		const response = await request(app).post('/movies').send(newMovie);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body.name).toBe('Test Movie');
		movieId = response.body.id;
	});

	// Test 3: DELETE /movies
	test('DELETE /movies/:id should delete a movie', async () => {
		const response = await request(app).delete(`/movies/${movieId}`);
		expect(response.status).toBe(204);
	});

	// Test 4: PUT /movies
	test('PUT /movies/:id should update a movie', async () => {
		// Crear una película para actualizar
		const createResponse = await request(app).post('/movies').send({
			name: 'Movie to Update',
			image: 'https://example.com/update.jpg',
			synopsis: 'Original synopsis',
			release_year: 2023,
		});
		const updateMovieId = createResponse.body.id;

		const updatedMovie = {
			name: 'Updated Movie',
			synopsis: 'Updated synopsis',
		};
		const response = await request(app)
			.put(`/movies/${updateMovieId}`)
			.send(updatedMovie);

		expect(response.status).toBe(200);
		expect(response.body.name).toBe('Updated Movie');

		movieId = updateMovieId; // Guardar para los siguientes tests
	});

	// Test 5: POST /movies/:id/actors
	test('POST /movies/:id/actors should add actors to a movie', async () => {
		const response = await request(app)
			.post(`/movies/${movieId}/actors`)
			.send([actorId]);

		expect(response.status).toBe(200);
	});

	// Test 6: POST /movies/:id/directors
	test('POST /movies/:id/directors should add directors to a movie', async () => {
		const response = await request(app)
			.post(`/movies/${movieId}/directors`)
			.send([directorId]);

		expect(response.status).toBe(200);
	});

	// Test 7: POST /movies/:id/genres
	test('POST /movies/:id/genres should add genres to a movie', async () => {
		const response = await request(app)
			.post(`/movies/${movieId}/genres`)
			.send([genreId]);

		expect(response.status).toBe(200);
	});
});
