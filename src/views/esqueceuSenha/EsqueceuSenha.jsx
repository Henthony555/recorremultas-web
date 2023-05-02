import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Image, Header, Segment, Divider, Icon } from 'semantic-ui-react'

class EsqueceuSenha extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment.Group stacked>
                            <Segment color="yellow">
                                <Header as='h3' color="yellow" icon>
                                   
                                        <Icon name='lock' />
                                    
                                    Problemas para entrar?
                                </Header>

                                <Grid.Row style={{ marginBottom: '2%' }}>
                                    Insira o seu email de usuário e enviaremos
                                    um link para você voltar a acessar a sua conta.
                                </Grid.Row>

                                <Form size='large'>

                                    <Form.Input
                                        fluid
                                        icon='envelope'
                                        iconPosition='left'
                                        placeholder='E-mail'
                                    />

                                    <Button color='yellow' fluid size='large'>
                                        Enviar link
                                    </Button>

                                    <Divider horizontal>OU</Divider>

                                    <Grid.Row as='h4'>
                                        <Link to={'/cadastro'}>Criar nova conta</Link>
                                    </Grid.Row>

                                </Form>
                            </Segment>

                            <Link to={'/login'}>
                                <Segment as='h4' color="yellow" style={{ marginTop: '20%' }}>
                                    Voltar ao login
                                </Segment>
                            </Link>
                        </Segment.Group>

                    </Grid.Column>
                </Grid >
            </>
        )
    }
}

export default EsqueceuSenha;
