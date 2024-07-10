import { Route, Routes } from 'react-router';
import './App.css';
import CountryPage from './pages/CountryPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country' element={<CountryPage />} />
      </Routes>
    </>
  );
}

export default App;
