import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Menu, Segment } from "semantic-ui-react";
import logo from '../assets/img/logoGrande.png';

class MenuSistema extends React.Component {

    state = {
        activeItem: 'home',
        estaLogado: true
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <>
                <Segment inverted color="yellow">
                    <Menu secondary color="red" size="large">
                        <Menu.Item>
                            <Image src={logo} as={Link} to='/' size='small' />
                        </Menu.Item>

                      {this.state.estaLogado &&
                      <>
                        <Menu.Item
                            name='criarPeticao'
                            active={this.state.activeItem === 'criarPeticao'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/criarPeticao'
                        />

                        <Menu.Item
                            name='meus dados'
                            active={this.state.activeItem === 'meus dados'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/usuario'
                        />

                        <Menu.Item
                            name='Agencias'
                            active={this.state.activeItem === 'meus dados'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/agencias'
                        />
                    </>
                    }
                        <Menu.Item position="right" >
                            <Link to={'/login'}>
                                <Button
                                    icon
                                    labelPosition='right'
                                    color='orange'
                                    floated='right'
                                //onClick={}
                                >
                                    <Icon name='sign-out' />
                                    Sair
                                </Button>
                            </Link>
                        </Menu.Item>
                       

{/*
                        <Menu.Item position="right" >
                            <Link to={'/login'}>
                                <Button
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                    floated='right'
                                //onClick={}
                                >
                                    <Icon name='file text' />
                                    Criar Petição
                                </Button>
                            </Link>
                        </Menu.Item>
                        */}







                    </Menu>
                </Segment>
            </>
        )
    }
}

export default MenuSistema;
