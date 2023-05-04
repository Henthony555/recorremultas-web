import React from 'react';
import { Route, Routes } from "react-router-dom";

<<<<<<< HEAD
import ADMagencias from './views/adm/admAgencias';
import Agencias from './views/agencias/Agencias';
import Avaliacao from './views/Avaliacao/Avaliacao';
=======
import CriarPeticao from './views/CriarPeticao/CriarPeticao';
import ADMagencias from './views/adm/admAgencias';
import Agencias from './views/agencias/Agencias';
>>>>>>> 016f478b4e1e9721755eebbb0e562b08b323664e
import Cadastro from './views/cadastro/Cadastro';
import EsqueceuSenha from './views/esqueceuSenha/EsqueceuSenha';
import Home from './views/home/Home';
import Login from './views/login/Login';
<<<<<<< HEAD
import Servico from './views/servico/Servico';
=======
>>>>>>> 016f478b4e1e9721755eebbb0e562b08b323664e
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
                <Route path="avaliacao" element={ <Avaliacao/> } />
                
            </Routes>
        </>
    )
}

export default Rotas
