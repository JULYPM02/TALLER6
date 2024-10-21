import axios from 'axios';

const apiClient = (apiType) => {
  let baseURL = '';
  let apiKey = '';

  if (apiType === 'cats') {
    baseURL = 'https://api.thecatapi.com/v1';
    apiKey = import.meta.env.VITE_CAT_API_KEY;
  } else if (apiType === 'dogs') {
    baseURL = 'https://api.thedogapi.com/v1';
    apiKey = import.meta.env.VITE_DOG_API_KEY;
  }

  return axios.create({
    baseURL,
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json'
    }
  });
};

export default apiClient;
