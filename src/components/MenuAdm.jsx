import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Menu, Segment } from "semantic-ui-react";
import logo from '../assets/img/logoGrande.png';

class MenuAdm extends React.Component {

    state = {
        activeItem: 'HomeAdm'
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
                            active={this.state.activeItem === 'HomeAdm'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/'
                        />
                        <Menu.Item
                            name='Cadastrar Agências'
                            active={this.state.activeItem === 'Cadastrar Agências'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/criarPeticao'
                        />
                        <Menu.Item
                            name='Estatísticas'
                            active={this.state.activeItem === 'Estatísticas'}
                            onClick={this.handleItemClick}
                            as={Link}
                            to='/usuario'
                        />                     

                    </Menu>
                </Segment>
            </>
        )
    }
}

export default MenuAdm;
