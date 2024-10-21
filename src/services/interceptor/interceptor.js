import axios from 'axios';

export const fetchInterceptor = (apiType, token) => {
    
    const apiKey = apiType === 'cat'
        ? import.meta.env.VITE_CAT_API_KEY
        : import.meta.env.VITE_DOG_API_KEY;

    
    return axios.create({
        method: 'GET', 
        headers: {
            'Content-type': 'application/json',
            'x-api-key': apiKey,
            'Authorization': `Bearer ${token}`, 
        },
    });
};
