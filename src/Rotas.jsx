import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './views/home/Home';
import Login from './views/login/Login';
import Usuario from './views/usuario/Usuario';
import Servico from './views/servico/Servico';
import Cadastro from './views/cadastro/Cadastro';
import EsqueceuSenha from './views/esqueceuSenha/EsqueceuSenha';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="login" element={ <Login/> } />
                <Route path="cadastro" element={ <Cadastro/> } />
                <Route path="usuario" element={ <Usuario/> } />
                <Route path="servico" element={ <Servico/> } />
                <Route path="esqueceuSenha" element={ <EsqueceuSenha/> } />
            </Routes>
        </>
    )
}

export default Rotas