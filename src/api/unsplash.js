import axios from 'axios';
import secret from '../secret.json';

// api @ https://unsplash.com/documentation#location
// auth @ https://unsplash.com/documentation#authorization
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${secret.unsplashApi.accessKey}`
  }
});
