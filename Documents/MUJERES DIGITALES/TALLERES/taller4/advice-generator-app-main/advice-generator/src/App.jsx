import AdviceProvider from './AdviceProvider.jsx';
import  AdviceLayout  from './AdviceLayout.jsx'; 
import  AdvicePage  from './AdvicePage.jsx'; 


const App = () => (
  <AdviceProvider>
    <AdviceLayout>
      <AdvicePage />
    </AdviceLayout>
  </AdviceProvider>
);

export default App;