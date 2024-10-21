import apiClient from './axios';

export const fetchCats = async () => {
  try {
    const response = await apiClient('cats').get('/breeds');
    return response.data;
  } catch (error) {
    console.error('Error fetching cats:', error);
    throw error;
  }
};

export const fetchCatById = async (id) => {
  try {
    const response = await apiClient('cats').get(`/breeds/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching cat with ID ${id}:`, error);
    throw error;
  }
};

