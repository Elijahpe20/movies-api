const request = require('supertest');
const app = require('../src/index');

describe('Genres endpoints', () => {
	let genreId;

	// Test 1: GET /genres
	test('GET /genres should return all genres', async () => {
		const response = await request(app).get('/genres');
		expect(response.status).toBe(200);
		expect(Array.isArray(response.body)).toBe(true);
	});

	// Test 2: POST /genres
	test('POST /genres should create a new genre', async () => {
		const newGenre = {
			name: 'Horror',
		};
		const response = await request(app).post('/genres').send(newGenre);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body.name).toBe('Horror');
		genreId = response.body.id;
	});

	// Test 3: PUT /genres/:id
	test('PUT /genres/:id should update a genre', async () => {
		const updatedGenre = {
			name: 'Horror Updated',
		};
		const response = await request(app)
			.put(`/genres/${genreId}`)
			.send(updatedGenre);

		expect(response.status).toBe(200);
		expect(response.body.name).toBe('Horror Updated');
	});

	// Test 4: DELETE /genres/:id
	test('DELETE /genres/:id should delete a genre', async () => {
		const response = await request(app).delete(`/genres/${genreId}`);
		expect(response.status).toBe(204);
	});
});
