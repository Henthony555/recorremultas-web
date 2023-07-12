import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Icon, Image, Menu, Segment } from "semantic-ui-react";
import logo from '../assets/img/logoGrande.png';


export default function MenuSistema () {
     
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (name) => {
        setActiveItem(name);
        };
    
    //const [estaLogado, setEstaLogado] = useState(true);
    const estaLogado = localStorage.getItem('user') !== null;
    const navigate = useNavigate();


    const handleLogout = () => {
      // Limpar informações de autenticação ou executar outras ações de logout
      localStorage.removeItem('user');
  
      // Redirecionar para a tela de login
      navigate('/login');
    };
    

   
   
        return (
            <>
                <Segment inverted color="yellow">
                    <Menu secondary color="red" size="large">
                        <Menu.Item>
                            <Image src={logo} as={Link} to='/' size='small' />
                        </Menu.Item>
                        {estaLogado ? (
                            <>

                                {/* 
                                <Menu.Item
                                    name='meus dados'
                                    active={activeItem === 'meus dados'}
                                    onClick={()=>handleItemClick()}
                                    as={Link}
                                    to='/usuario'
                                />
                                */}

                                <Menu.Item
                                    name='criarPeticao'
                                    active={activeItem === 'criarPeticao'}
                                    onClick={()=>handleItemClick()}
                                    as={Link}
                                    to='/criarPeticao'
                                />
                                

                                <Menu.Item
                                    name='Agencias'
                                    active={activeItem === 'agencias'}
                                    onClick={()=>handleItemClick()}
                                    as={Link}
                                    to='/agencias'
                                /> 

                                <Menu.Item position="right" >
                                        <Button
                                            icon
                                            labelPosition='right'
                                            color='orange'
                                            floated='right'
                                            onClick={handleLogout}>
                                            <Icon name='sign-out' />
                                            Sair
                                        </Button>
                                       
                                </Menu.Item>
                            </>


                        ) :(


                        
                            <>
                                <Menu.Item position="right" >
                                    
                                        <Button
                                            icon
                                            labelPosition='left'
                                            color='red'
                                            floated='left'
                                            as={Link}
                                            to='/agencias'
                                            
                                        >
                                            <Icon name='building' />
                                            Agências
                                        </Button>

                                        <Button
                                            icon
                                            labelPosition='left'
                                            color='orange'
                                            floated='right'
                                            as={Link}
                                            to='/login'
                                            
                                        >
                                            <Icon name='file text' />
                                            Criar Petição
                                        </Button>
                                
                                </Menu.Item>
                            </>
                        )}
                    </Menu>
                </Segment>
            </>
        )
    }


