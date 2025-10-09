import './App.css'
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages';
import { RegisterGymPage } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register-gym" element={<RegisterGymPage />} />
    </Routes>
  );
}

export default App;

