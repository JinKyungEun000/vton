import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import PersonSelect from './pages/PersonSelect';
import ClothingSelect from './pages/ClothingSelect';
import Results from './pages/Results';
import Loading from './pages/Loading';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="person" element={<PersonSelect />} />
          <Route path="clothing" element={<ClothingSelect />} />
          <Route path="results" element={<Results />} />
          <Route path="loading" element={<Loading />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;