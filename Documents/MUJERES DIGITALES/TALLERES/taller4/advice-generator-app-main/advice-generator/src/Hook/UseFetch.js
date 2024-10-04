import { useEffect, useReducer, useState } from 'react';
import { adviceReducer, initialState } from '../counterReducer.js'; 

export const useFetch = () => {
    const [data, setData] = useState({ slip: {} });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const [state, dispatch] = useReducer(adviceReducer, initialState);

    const fetchData = async (defaultFetch = false) => {
        const url = defaultFetch || state.id === 0 ? state.url : `${state.url}/${state.id}`;
        console.log('Fetching from URL:', url); 
    
        setLoading(true);
        try {
            const response = await fetch(url);
            const resJson = await response.json();
            dispatch({ type: 'UPDATE_RANDOM_ID', payload: resJson.slip.id });
            setData(resJson);
        } catch (err) {
            setError(true);
            console.error("Error fetching data: ", err); 
        } finally {
            setLoading(false);
        }
        
    };
    
    return { data, error, loading, dispatch, fetchData };
};
