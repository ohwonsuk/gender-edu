import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EduProgram from './pages/EduProgram';
import HealingProgram from './pages/HealingProgram';
import Training from './pages/Training';
import Counseling from './pages/Counseling';
import Header from './components/Header';
import EduDetail from './components/EduDetail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eduprogram" element={<EduProgram />} />
        <Route path="/eduprogram/:id" element={<EduDetail />} />
        <Route path="/healingprogram'" element={<HealingProgram />} />
        <Route path="/healingprogram/:id" element={<EduDetail />} />
        <Route path="/training" element={<Training />} />
        <Route path="/counseling" element={<Counseling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
