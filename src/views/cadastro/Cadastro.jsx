import React from "react";
import logo from '../../assets/img/logo.png';
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Image, Segment, Icon } from 'semantic-ui-react'

class Cadastro extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>

                    <Grid.Column style={{ maxWidth: 800 }}>
                        <Segment color='yellow'>
                            <Grid columns={2}  divided>
                                <Grid.Column  as='h2'>
                                   Criar uma conta
                                    <Form size='large' style={{ marginTop: '2%' }}>

                                        <Form.Input
                                            fluid
                                            icon='user circle'
                                            iconPosition='left'
                                            placeholder='Nome do usuário'
                                        />

                                        <Form.Input
                                            fluid
                                            icon
                                            iconPosition='left'
                                        >
                                            <Icon name='address card' />
                                            <InputMask
                                                placeholder='CPF'
                                                mask="999.999.999-99"
                                            />
                                        </Form.Input>

                                        <Form.Input
                                            fluid
                                            icon='envelope'
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

                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Confirmar senha'
                                            type='password'
                                        />

                                        <Button color='yellow' fluid size='large'>
                                            Registrar
                                        </Button>

                                    </Form>
                                </Grid.Column>

                                <Grid.Column>
                                    <Grid.Row>
                                        <Image src={logo} size="small" circular centered />
                                        
                                    </Grid.Row>
                                    <Grid.Row style={{ marginTop: '10%' }} >
                                        <Button color='google plus' size='large'>
                                            <Icon name='google plus g' /> Criar com o Google
                                        </Button>
                                    </Grid.Row>

                                    <Grid.Row style={{ marginTop: '15%' }} as='h4'>
                                        Já tem uma conta? &nbsp; <Link to={'/login'}>Entrar</Link>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid.Column>


                </Grid>
            </>
        )
    }
}

export default Cadastro;
