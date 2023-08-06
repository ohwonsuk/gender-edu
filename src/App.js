import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EduProgram from './pages/EduProgram';
import HealingProgram from './pages/HealingProgram';
import Training from './pages/Training';
import Counseling from './pages/Counseling';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eduprogram" element={<EduProgram />} />
        <Route path="/healingprogram" element={<HealingProgram />} />
        <Route path="/training" element={<Training />} />
        <Route path="/counseling" element={<Counseling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
