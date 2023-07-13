import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Menu, Segment } from "semantic-ui-react";
import logo from '../assets/img/logoGrande.png';

export default function MenuSistema ()  {
   
    const [activeItem,setActiveItem] = useState();
    const [estaLogado,setEstaLogado] = useState(true);

        return (
            <>
                <Segment inverted color="yellow">
                    <Menu secondary color="red" size="large">
                        <Menu.Item>
                            <Image src={logo} as={Link} to='/' size='small' />
                        </Menu.Item>

                        {estaLogado &&
                            <>
                                <Menu.Item
                                    name='criarPeticao'
                                
                                    
                                    as={Link}
                                    to='/criarPeticao'
                                />

                                <Menu.Item
                                    name='meus dados'
                                  
                               
                                    as={Link}
                                    to='/usuario'
                                />

                                <Menu.Item
                                    name='Agencias'
                           
                                   
                                    as={Link}
                                    to='/listagencias'
                                />

                                <Menu.Item position="right" >
                                        <Button
                                            icon
                                            labelPosition='right'
                                            color='orange'
                                            as={Link}
                                            floated='right'
                                            to='/login'
                                        >
                                            <Icon name='sign-out' />
                                            Sair
                                        </Button>
                                </Menu.Item>
                            </>
                        }



                        {!estaLogado &&
                            <>
                                <Menu.Item position="right" >
                                    
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
                        }
                    </Menu>
                </Segment>
            </>
        )
    
};
