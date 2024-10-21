import axios from '../interceptor';

export const fetchCats = async () => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching cats:', error);
    throw error;
  }
};
