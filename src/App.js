import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EduProgram from './pages/EduProgram';
import HealingProgram from './pages/HealingProgram';
import Training from './pages/Training';
import Counseling from './pages/Counseling';
import Header from './components/Header';
import EduDetail from './components/EduDetail';
import HealingDetail from './components/HealingDetail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/eduprogram" element={<EduProgram />} />
        <Route exact path="/eduprogram/:id" element={<EduDetail />} />
        <Route exact path="/healingprogram" element={<HealingProgram />} />
        <Route exact path="/healingprogram/:id" element={<HealingDetail />} />
        <Route exact path="/training" element={<Training />} />
        <Route exact path="/counseling" element={<Counseling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
