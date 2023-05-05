import React from 'react';
import { Container, Divider, Form, Grid } from 'semantic-ui-react';

class FormularioPeticao extends React.Component {
    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> Dados Petição</h1>
                            <Divider/>
                        
                            <h4 >Preencha o formulário de acordo com seus dados</h4>
                        <Form>
                            <Form.Group widths='equal'>   
                                <Form.Input
                                required
                                fluid
                                label= 'Nome Completo'
                                />

                                <Form.Input
                                required
                                fluid
                                label= 'Nacionalidade'
                                />

                                <Form.Input
                                required
                                fluid
                                label= 'Estado Civil'
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>   
                                <Form.Input
                                required
                                fluid
                                label= 'Profissão'
                                />

                                <Form.Input
                                required
                                fluid
                                label= 'Carteira Nacional de Habilitação (CNH)'
                                />
                                
                          
                            </Form.Group>
                        </Form>
                          
                            

          
                            
                          
                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }
}

export default FormularioPeticao;