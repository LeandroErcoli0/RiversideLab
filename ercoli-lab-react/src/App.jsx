import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Team from './componentes/Team';
import Research from './componentes/Research';
import Publications from './componentes/Publications';
import Join from './componentes/Join';

export default function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/team" element={<Team />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      
    </BrowserRouter>
  );
}