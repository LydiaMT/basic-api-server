'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('---------- SERVER TEST ----------', () => {

  it('should create a new food item in the database', async () => {
    const response = await mockRequest.post('/food').send({ type: 'apple' })
    expect(response.status).toBe(201);
    expect(response.body.record.type).toEqual('apple');
  });

  it('should retrieve a food item from the database with the same id', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
  });

  it('should retrieve all food items from the database', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  it('should create a new clothing item in the database', async () => {
    const response = await mockRequest.post('/clothes').send({ type: 'shirt' })
    expect(response.status).toBe(201);
    expect(response.body.record.type).toEqual('shirt');
  });

  it('should retrieve a clothing item from the database', async () => {
    const response = await mockRequest.get('/clothes/1');
    expect(response.status).toBe(200);
  });

  it('should retrieve all clothing items from the database', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
  });

  it('handles invalid requests', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  })

  it('handles invalid methods', async () => {
    const response = await mockRequest.patch('/food');
    expect(response.status).toEqual(404);
  })

});
