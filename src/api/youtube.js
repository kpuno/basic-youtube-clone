import axios from 'axios';

// specify baseURL and params
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});