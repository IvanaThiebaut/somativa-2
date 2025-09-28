import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa os componentes das páginas
import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';
import NotFound from './paginas/NotFound';
import Cadastro from './paginas/Cadastro';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* O path="*" funciona como um "coringa" para qualquer outra rota não definida */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
