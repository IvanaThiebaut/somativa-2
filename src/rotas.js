import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import Principal from './paginas/Principal';
import Sobre from './paginas/Sobre';
import NotFound from './paginas/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas; 