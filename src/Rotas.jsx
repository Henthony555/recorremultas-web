import React from 'react';
import { Route, Routes } from "react-router-dom";

import CriarPeticao from './views/CriarPeticao/CriarPeticao';
import FormularioPeticao from './views/CriarPeticao/formularioPeticao';
import CadastrarMulta from './views/adm/CadastrarMulta';
import GerenciarPeticao from './views/adm/GerenciarPeticao';
import Multas from './views/adm/Multas';
import Peticao from './views/adm/Peticao';
import ADMagencias from './views/adm/admAgencias';
import Agencias from './views/agencias/Agencias';
import Cadastro from './views/cadastro/Cadastro';
import EsqueceuSenha from './views/esqueceuSenha/EsqueceuSenha';
import Home from './views/home/Home';
import Login from './views/login/Login';

import ExibirMultas from './views/adm/ExibirMultas';
import DadosCadastrados from './views/usuario/DadosCadastrados';
import HistoricoPeticao from './views/usuario/HistoricoPeticao';
import Usuario from './views/usuario/Usuario';


import PdfPeticao from './views/CriarPeticao/pdfPeticao';
import ListAgencias from './views/adm/ListAgencias';

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
                <Route path="HistoricoPeticao" element={ <HistoricoPeticao/>} />
                
                <Route path="criarPeticao" element={ <CriarPeticao/> } />
                <Route path="formularioPeticao" element={ <FormularioPeticao/> } />
              
                <Route path="agencias" element={ <Agencias/> } />

                
                <Route path="/exibirMultas" element={<ExibirMultas/>} />
                <Route path="admagencias" element={ <ADMagencias/> } />
                <Route path="admGerenciarPeticao" element={ <GerenciarPeticao/>} /> 
                <Route path="listAgencias" element={ <ListAgencias/> } />
                <Route path="admMultas" element={ <Multas/>} />   
                <Route path="admPeticao" element={ <Peticao/>} />
                <Route path="admCadastroMulta" element={ <CadastrarMulta/>} />

                <Route path="pdf" element={ <PdfPeticao/>} />
                
                
            </Routes>
        </>
    )
}

export default Rotas
