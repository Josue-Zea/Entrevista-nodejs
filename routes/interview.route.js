const express = require('express')
const controller = require('../controllers/interview.controller');
const api = express.Router();

api.get('/filter/:min/:max/:rooms', controller.filter);
api.post('/addFile', controller.addFile);
api.post('/report', controller.addFile);
module.exports = api;