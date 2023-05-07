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

                            <h3 textAlign='center'> EXCELENTÍSSIMO(A) SENHOR(A) PRESIDENTE(A) DA JARI - JUNTA ADMINISTRATIVA DE RECURSOS DE INFRAÇÕES,</h3><br/>
                            {/* */}
                        <Form textAlign="justified">
                            <Form.Group   >   
                                <Form.Input required size='small' placeholder = 'Nome completo'width={4}/>
                                <p>, nacionalidade:</p>
                                <Form.Input required size='small' placeholder= 'Nacionalidade'/>
                                <Form.Input required size='small' placeholder= 'Estado Civil'/>
                                <p>, profissão</p>
                                <Form.Input required size='small' placeholder= 'Profissão' />,
                            </Form.Group>

                            <Form.Group>   
                                <p> Carteira Nacional de Habilitação (CNH) n°</p>
                                <Form.Input required size='small' placeholder= '(CNH)'/>
                                <p>, expedida por</p>
                                <Form.Input required size='small' placeholder= 'Órgão expedidor'/>
                                <p>, CPF n°</p>
                                <Form.Input required size='small' placeholder= 'CPF' width={3}/>,
                            </Form.Group>

                            <Form.Group> 
                                <p> telefone n°</p>
                                <Form.Input required size='small' placeholder= 'Telefone'/>
                                <p>, reside em:</p>
                                <Form.Input required size='small' placeholder= 'Endereço completo' width={'10'}/>,
                            </Form.Group>
                            
                            <Form.Group> 
                                <p> proprietário do veículo modelo</p>
                                <Form.Input required size='small' placeholder= 'Marca e modelo do veículo' width={'5'}/>
                                <p>, placa</p>
                                <Form.Input required size='small' placeholder= 'Placa'/>
                                <p>RENAVAM n°</p>
                                <Form.Input required size='small' placeholder= 'Número do RENAVAM'/>,
                            </Form.Group>
                            
                            <Form.Group> 
                                <p>chassi n°</p>
                                <Form.Input required size='small' placeholder= 'Chassi do veículo'/>
                                <p>, venho, com fulcro no Código de Trânsito Brasileiro (Lei Federal n.
                                9.503, de 23 de setembro de 1997), interpor tempestivamente o presente:</p>
                            </Form.Group>
                            
                            <h3 style={{textAlign:'center'}}>RECURSO</h3>

                            <p>contra aplicação de penalidade por suposta infração de trânsito, pelos fundamentos de fato e de direito a seguir expostos.</p>
                          
                        
                          
                            
                        </Form>
                         
                            

          
                            
                          
                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }
}

export default FormularioPeticao;