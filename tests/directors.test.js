const request = require('supertest');
const app = require('../src/index');

describe('Directors endpoints', () => {
	let directorId;

	// Test 1: GET /directors
	test('GET /directors should return all directors', async () => {
		const response = await request(app).get('/directors');
		expect(response.status).toBe(200);
		expect(Array.isArray(response.body)).toBe(true);
	});

	// Test 2: POST /directors
	test('POST /directors should create a new director', async () => {
		const newDirector = {
			first_name: 'Test',
			last_name: 'Director',
			nationality: 'American',
			image: 'https://example.com/test.jpg',
			birthday: '1980-01-01',
		};
		const response = await request(app).post('/directors').send(newDirector);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body.first_name).toBe('Test');
		directorId = response.body.id;
	});

	// Test 3: PUT /directors/:id
	test('PUT /directors/:id should update a director', async () => {
		const updatedDirector = {
			first_name: 'Test Updated',
			last_name: 'Director Updated',
		};
		const response = await request(app)
			.put(`/directors/${directorId}`)
			.send(updatedDirector);

		expect(response.status).toBe(200);
		expect(response.body.first_name).toBe('Test Updated');
	});

	// Test 4: DELETE /directors/:id
	test('DELETE /directors/:id should delete a director', async () => {
		const response = await request(app).delete(`/directors/${directorId}`);
		expect(response.status).toBe(204);
	});
});
