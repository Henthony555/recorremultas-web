import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Form, Grid, Header, Icon, Segment } from 'semantic-ui-react';

class AlterarSenha extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Segment.Group stacked>
                            <Segment color="Yellow">
                                <Header as='h3' color="red" icon>
                                   
                                        <Icon name='lock' />
                                    
                                    Alterar Senha
                                </Header>

                                <br></br><br></br>

                                <Form size='large'>


                            <h4> Sua nova senha </h4>
                                    <Form.Input
                                        flui
                                        iconPosition='left'
                                        placeholder='Nova Senha'
                                        
                                    />

                            <h4> Confirme a nova senha </h4>
                                    <Form.Input
                                        flui
                                        iconPosition='left'
                                        placeholder='Nova Senha'
                                        
                                    />

                                    <Button color='yellow' fluid size='large'>
                                        Salvar Alteração
                                    </Button>


                                </Form>
                            </Segment>

                            <Link to={'/Usuario'}>
                                <Segment as='h4' color="yellow" style={{ marginTop: '20%' }}>
                                    Voltar
                                </Segment>
                            </Link>
                        </Segment.Group>

                    </Grid.Column>
                </Grid >
            </>
        )
    }
}

export default AlterarSenha;
