
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const WEATHER_API = `https://api.openweathermap.org/data/2.5/onecall?lat=22.719568&lon=75.857727&exclude=minutely,hourly,current&units=metric&appid=${process.env.WEATHER_KEY}`

const NEWS_API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_KEY}`

export {
    WEATHER_API,
    NEWS_API,
};