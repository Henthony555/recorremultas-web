import React from 'react';
import { Route, Routes } from "react-router-dom";

import MenuAdm from "./components/MenuAdm";
import CriarPeticao from './views/CriarPeticao/CriarPeticao';
import FormularioPeticao from './views/CriarPeticao/formularioPeticao';
import CadastrarMulta from './views/adm/CadastrarMulta';
import GerenciarPeticao from './views/adm/GerenciarPeticao';
import Multas from './views/adm/Multas';
import Peticao from './views/adm/Peticao';
import Registros from './views/adm/Registros';
import ADMagencias from './views/adm/admAgencias';
import Agencias from './views/agencias/Agencias';
import Cadastro from './views/cadastro/Cadastro';
import EsqueceuSenha from './views/esqueceuSenha/EsqueceuSenha';
import Home from './views/home/Home';
import Login from './views/login/Login';
import AlterarSenha from './views/usuario/AlterarSenha';
import DadosCadastrados from './views/usuario/DadosCadastrados';
import HistoricoPeticao from './views/usuario/HistoricoPeticao';
import Usuario from './views/usuario/Usuario';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="login" element={ <Login/> } />
                <Route path="cadastro" element={ <Cadastro/> } />
                <Route path="esqueceuSenha" element={ <EsqueceuSenha/> } />

                <Route path="usuario" element={ <Usuario/> } />
                <Route path="DadosCadastrados" element={ <DadosCadastrados/>} />
                <Route path="AlterarSenha" element={ <AlterarSenha/>} />
                <Route path="HistoricoPeticao" element={ <HistoricoPeticao/>} />
                
                <Route path="criarPeticao" element={ <CriarPeticao/> } />
                <Route path="formularioPeticao" element={ <FormularioPeticao/> } />
              
                <Route path="agencias" element={ <Agencias/> } />
                
                <Route path="admagencias" element={ <ADMagencias/> } />
                <Route path="admGerenciarPeticao" element={ <GerenciarPeticao/>} /> 
                <Route path="admMultas" element={ <Multas/>} />   
                <Route path="admPeticao" element={ <Peticao/>} />
                <Route path="admRegistros" element={ <Registros/>} />
                <Route path="admCadastroMulta" element={ <CadastrarMulta/>} />
                
                
            </Routes>
        </>
    )
}

export default Rotas
