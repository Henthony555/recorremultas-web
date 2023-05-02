import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Segment, Button, Icon } from "semantic-ui-react"
import logo from '../assets/img/logoGrande.png';

class MenuSistema extends React.Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <>
                <Segment inverted color="yellow">
                    <Menu secondary color="red" size="large">

                        <Menu.Item >
                            <Image src={logo}  size='small' />
                        </Menu.Item>

                        {/**/}
                        <Menu.Item
                            name='home'
                            active={this.state.activeItem === 'home'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/'
                        />
                        <Menu.Item
                            name='serviço'
                            active={this.state.activeItem === 'serviço'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/servico'
                        />
                        <Menu.Item
                            name='meus dados'
                            active={this.state.activeItem === 'meus dados'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/usuario'
                        />
                        <Menu.Item position="right" >
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