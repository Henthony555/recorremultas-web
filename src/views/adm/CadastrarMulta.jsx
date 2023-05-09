import React from "react";
import { Button, Container, Divider, Grid, Icon, Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CadastrarMulta extends React.Component{
render() {
    return (
            
        <>
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                            <h1 style={{fontSize:'3rem'}}> Cadastro </h1>

                            <Divider />

                        <div style={{marginTop: '4%'}}>
                            <Form>

                                <Form.Group widths="equal">
                                    <Form.Input
                                        required
                                        fluid
                                        width={3}
                                        label='Artigo'
                                        maxLength="10"
                                        placeholder="EX.: art 181, VII"
                                    
                                    />

                                    <Form.Input
                                        required
                                        fluid
                                        width={14}
                                        label='Infração'
                                        placeholder="Informe a infração. Ex.: Estacionar o veículo nos acostamentos"
                                    
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Input
                                        required
                                        fluid
                                        label='Valor da Multa'
                                        width={4}
                                        placeholder="Ex.: R$ 88,98"
                                    
                                    />
                                    <Form.Input
                                    required
                                        fluid
                                        label='Gravidade'
                                        width={8}
                                        placeholder="Ex.: Leve"

                                    />
                                    <Form.Input
                                    required
                                        fluid
                                        label='Pontos'
                                        width={6}
                                        placeholder="Ex.: 3 "

                                    />
                                </Form.Group>
                                    <br/><br/><br/>

                                    <Button
										type="button"
										inverted
										circular
										icon
										labelPosition='left'
										color='orange'
										>
										<Icon name='reply' />
										<Link to={'/admGerenciarPeticao'}>Voltar</Link>
                                    </Button>

                                    <Button
                                        type="button"
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
                                        floated='right'
                                    >
                                        <Icon name='file alternate' />
                                        <Link to={'/admMultas'}> Cadastrar</Link>
                                    </Button>
                            </Form>
                        </div>                  
                    </Container>
                </div>
            </Grid>   

        </>
            
    )
}
}
  

export default CadastrarMulta;