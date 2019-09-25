import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}api/v${process.env.REACT_APP_API_VERSION}`
});

export default instance;
