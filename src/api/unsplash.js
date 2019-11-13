import axios from 'axios';

// api @ https://unsplash.com/documentation#location
// auth @ https://unsplash.com/documentation#authorization
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
});
