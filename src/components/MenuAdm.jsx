import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Menu, Segment } from "semantic-ui-react";
import logo from '../assets/img/logoGrande.png';

class MenuSistema extends React.Component {

    state = {
        activeItem: 'home',
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
                          
                    </Menu>
                </Segment>
            </>
        )
    }
}

export default MenuSistema;
