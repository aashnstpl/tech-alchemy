import request from 'request';
import { successResponse, errorResponse, dateFormate } from '../helpers';
import {
    WEATHER_API,
    NEWS_API,
}  from '../constants';

exports.getWeather = async (req, res) => {
  try {
    const { location, unit } = req.query;

    // Request URL  
    const url = WEATHER_API;
   
    request(url, (error, response, body)=>{
        
        // Printing the error if occurred
        if(error) {          
          return errorResponse(req, res, error);
        }

        // Send response
        if(response.statusCode == 200) {
       
            let arr = [];
            const data = JSON.parse(body);
            console.log(data);

            // to get data of next five days only
            const count = data.daily.length - 2;

            for (let i = 0; i < count; i++) {
              arr.push({
                date: dateFormate(new Date(data.daily[i].dt*1000)),
                temp: data.daily[i].temp.day,
              });
            }
            
          return successResponse(req, res, arr, count, unit, location);
        } else {
          return errorResponse(req, res, response);
        }
    }); 
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

exports.getNews = async (req, res) => {
  try {
    const { search } = req.query;

    const api = NEWS_API;
    var url = search ? `${api}&q=${search}`: api;
   
    request(url, (error, response, body)=>{
        
      // Printing the error if occurred
      if(error) {          
        return errorResponse(req, res, error);
      }

      // Send response
      if(response.statusCode == 200) {
       
        let arr = [];
        const data = JSON.parse(body);
        console.log(data);
        let count = data.articles.length;
        for (let i = 0; i < count; i++) {
          arr.push({
            headline: data.articles[i].title,
            link: data.articles[i].url,
          });
        }
        return successResponse(req, res, arr, count);
      } else {
        return errorResponse(req, res, response);
      }
    }); 
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
