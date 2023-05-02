import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logoGrande.png';
import { Button, Form, Grid, Image, Container, Segment, Divider, Icon } from 'semantic-ui-react'

class Login extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh', marginTop: '2%' }} >
                    <Grid.Column style={{ maxWidth: 450 }}>

                        <Image src={logo} size="medium" centered />
                        <Form size='large' style={{ marginTop: '2%' }}>
                            <Segment color='yellow' stacked>
                                <Form.Input
                                    fluid 
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail'
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Senha'
                                    type='password'
                                />

                                <Button color='yellow' fluid size='large'>
                                    Entrar
                                </Button>

                                <Divider horizontal>OU</Divider>

                                <Button color='google plus' size='large'>
                                    <Icon name='google plus g' /> Entrar com o Google
                                </Button>

                                <Container as='h4' style={{ marginTop: '3%' }}>
                                <Link to={'/esqueceuSenha'}>Esqueceu a senha?</Link>
                                </Container>
                            </Segment>
                        </Form>
                        <Segment as='h4' color='yellow'>
                            Não tem uma conta? &nbsp; <Link to={'/cadastro'}>Cadastre-se</Link>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default Login;
