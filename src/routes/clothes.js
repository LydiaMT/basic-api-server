'use strict';

const express = require('express');

const Clothes = require('../models/clothes.js');
const clothes = new Clothes();

const clothesRouter = express.Router();

// ------------------- Routes -------------------
clothesRouter.get('/clothes', getClothes);
clothesRouter.get('/clothes/:id', getOneClothes);
clothesRouter.post('/clothes', createClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);

// ------------------- Route handlers -------------------

function getClothes(req, res) {
  let getAllClothes = clothes.read();
  res.status(200).json(getAllClothes);
}

function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let singleClothes = clothes.read(id);
  res.status(200).json(singleClothes);
}

function createClothes(req, res) {
  let content = req.body;
  let createdClothes = clothes.create(content);
  res.status(201).json(createdClothes);

}

function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let updatedClothes = clothes.update(id, content);
  res.status(200).json(updatedClothes);
}

function deleteClothes(req, res) {
  const id = parseInt(req.params.id);
  let deletedClothes = clothes.delete(id);
  res.status(201).json(deletedClothes);
}

module.exports = clothesRouter;
