import { useContext } from 'react';
import { Advice } from './Advice'; 
import AdviceContext from '../AdviceContext'; 

export const AdviceChildren = () => {
    
    const { slip: { id, advice }, dispatch, loading } = useContext(AdviceContext);

    return (
        <Advice
            id={id}
            description={advice}
            dispatch={dispatch}
            loading={loading}
        />
    );
};
