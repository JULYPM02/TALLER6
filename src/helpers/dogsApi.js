import apiClient from './axios';

export const fetchDogs = async () => {
  try {
    const response = await apiClient('dogs').get('/breeds');
    return response.data;
  } catch (error) {
    console.error('Error fetching dogs:', error);
    throw error;
  }
};

export const fetchDogById = async (id) => {
  try {
    const response = await apiClient('dogs').get(`/breeds/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching dog with ID ${id}:`, error);
    throw error;
  }
};
