import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DogDetail from './services/dog/AnimalDetail';
import CatDetail from './services/cat/AnimalDetail';

function App() {
  const [selectedDog, setSelectedDog] = useState();
  const [selectedCat, setSelectedCat] = useState();

  const closeModal = () => {
    setSelectedDog();
    setSelectedCat();
  };

  return (
    <Router>
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/cats" element={<CatList />} />
      </Routes>

      {selectedDog && <DogDetail dog={selectedDog} closeModal={closeModal} />}
      {selectedCat && <CatDetail cat={selectedCat} closeModal={closeModal} />}
    </Router>
  );
}

export default App;
