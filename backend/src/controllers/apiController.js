import { errorResponse } from '../helpers';

import apiService from '../services/apiService'

export const getWeather = async (req, res) => {
  try {
    let response = await apiService.getWeather(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const getNews = async (req, res) => {
  try {
    let response = await apiService.getNews(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
