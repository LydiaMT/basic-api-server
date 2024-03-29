'use strict';

const express = require('express');

const Food = require('../models/food.js');
const food = new Food();

const foodRouter = express.Router();

// ------------------- Routes -------------------
foodRouter.get('/food', getFood);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', createFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);

// ------------------- Route handlers -------------------

function getFood(req, res) {
  let getAllFood = food.read();
  res.status(200).json(getAllFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let singleFood = food.read(id);
  res.status(200).json(singleFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = food.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let updatedFood = food.update(id, content);
  res.status(200).json(updatedFood);
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deletedFood = food.delete(id);
  res.status(201).json(deletedFood);
}

module.exports = foodRouter;
