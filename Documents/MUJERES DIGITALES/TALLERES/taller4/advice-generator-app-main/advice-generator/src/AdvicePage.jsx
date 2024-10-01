import { useContext, useEffect } from 'react';
import { AdviceFather } from './components/AdviceFather'; 
import AdviceContext from './AdviceContext'; 


const AdvicePage = () => {
  const { fetchData } = useContext(AdviceContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <AdviceFather/>;
};

export default AdvicePage;


