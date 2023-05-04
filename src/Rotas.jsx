import React from 'react';
import { Route, Routes } from "react-router-dom";

import CriarPeticao from './views/CriarPeticao/CriarPeticao';
import ADMagencias from './views/adm/admAgencias';
import Agencias from './views/agencias/Agencias';
import Cadastro from './views/cadastro/Cadastro';
import EsqueceuSenha from './views/esqueceuSenha/EsqueceuSenha';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Usuario from './views/usuario/Usuario';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="login" element={ <Login/> } />
                <Route path="cadastro" element={ <Cadastro/> } />
                <Route path="usuario" element={ <Usuario/> } />
                <Route path="criarPeticao" element={ <CriarPeticao/> } />
                <Route path="esqueceuSenha" element={ <EsqueceuSenha/> } />
                <Route path="agencias" element={ <Agencias/> } />
                <Route path="admagencias" element={ <ADMagencias/> } />
                               
            </Routes>
        </>
    )
}

export default Rotas
