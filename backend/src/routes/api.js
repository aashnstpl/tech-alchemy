import express from 'express';

import * as apiController from '../controllers/apiController';
const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/weather', apiController.getWeather);
router.get('/news', apiController.getNews);

module.exports = router;
