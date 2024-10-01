import   useContext  from 'react';
import AdviceContext from './AdviceContext.js'; 
import { useFetch } from './Hook/UseFetch.js'; 



const AdviceProvider = ({ children }) => {
  const { data: { slip }, loading, dispatch, fetchData } = useFetch();

  return (
    <AdviceContext.Provider value={{ slip, loading, dispatch, fetchData }}>
      {children}
    </AdviceContext.Provider>
  );
};

export default AdviceProvider; 

