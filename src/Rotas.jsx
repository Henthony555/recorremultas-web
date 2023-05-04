import React from 'react';
import { Route, Routes } from "react-router-dom";

import ADMagencias from './views/adm/admAgencias';
import Agencias from './views/agencias/Agencias';
import Avaliacao from './views/Avaliacao/Avaliacao';
import Cadastro from './views/cadastro/Cadastro';
import EsqueceuSenha from './views/esqueceuSenha/EsqueceuSenha';
import Home from './views/home/Home';
import Login from './views/login/Login';
import Servico from './views/servico/Servico';
import Usuario from './views/usuario/Usuario';

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
                <Route path="agencias" element={ <Agencias/> } />
                <Route path="admagencias" element={ <ADMagencias/> } />
                <Route path="avaliacao" element={ <Avaliacao/> } />
                
            </Routes>
        </>
    )
}

export default Rotas
