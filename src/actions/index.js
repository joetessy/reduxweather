import axios from 'axios';

const API_KEY = '65399758448a1fec3cbd4e8a6af1972c';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    request
  };
};
