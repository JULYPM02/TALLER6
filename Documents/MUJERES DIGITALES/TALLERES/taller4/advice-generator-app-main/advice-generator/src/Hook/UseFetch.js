import { useEffect, useReducer, useState } from 'react';
import { adviceReducer, initialState } from '../counterReducer.js'; 

export const useFetch = () => {
    const [data, setData] = useState({ slip: {} });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(adviceReducer, initialState);

    const fetchData = async (url = 'https://api.adviceslip.com/advice') => {
        console.log('Fetching from URL:', url);
        setLoading(true);
        setError(false); 

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            const resJson = await response.json();
            
            setData(resJson);
            dispatch({ type: 'UPDATE_RANDOM_ID', payload: resJson.slip.id }); 
        } catch (err) {
            setError(true); 
            console.error("Error fetching data:", err);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []); 

    return { data, error, loading, dispatch, fetchData };
};
