const request = require('supertest');
const app = require('../src/index');

describe('Actors endpoints', () => {
	let actorId;

	// Test 1: GET /actors
	test('GET /actors should return all actors', async () => {
		const response = await request(app).get('/actors');
		expect(response.status).toBe(200);
		expect(Array.isArray(response.body)).toBe(true);
	});

	// Test 2: POST /actors
	test('POST /actors should create a new actor', async () => {
		const newActor = {
			first_name: 'Test',
			last_name: 'Actor',
			nationality: 'American',
			image: 'https://example.com/test.jpg',
			birthday: '1990-01-01',
		};
		const response = await request(app).post('/actors').send(newActor);

		expect(response.status).toBe(201);
		expect(response.body).toHaveProperty('id');
		expect(response.body.first_name).toBe('Test');
		actorId = response.body.id;
	});

	// Test 3: PUT /actors/:id
	test('PUT /actors/:id should update an actor', async () => {
		const updatedActor = {
			first_name: 'Test Updated',
			last_name: 'Actor Updated',
		};
		const response = await request(app)
			.put(`/actors/${actorId}`)
			.send(updatedActor);

		expect(response.status).toBe(200);
		expect(response.body.first_name).toBe('Test Updated');
	});

	// Test 4: DELETE /actors/:id
	test('DELETE /actors/:id should delete an actor', async () => {
		const response = await request(app).delete(`/actors/${actorId}`);
		expect(response.status).toBe(204);
	});
});
