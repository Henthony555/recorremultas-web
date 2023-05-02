import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Grid, Icon } from 'semantic-ui-react';

class Servico extends React.Component {


    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    <div style={{marginTop: '4%'}}>
                        <Container textAlign="justified" >
                            <h2> Petições </h2>
                            <Divider/>
                        
                            <div style={{marginTop:'5%'}}>
                                <Button animated>
                                    <Button.Content visible>Consultar Petições</Button.Content>
                                    <Button.Content hidden>
                                    <Icon name="file alternate outline"/>
                                    </Button.Content>
                                    <Link to={'/consultarPeticao'}></Link>
                                </Button>
                                    
                                <br/><br/><br/>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    color='orange'
                                    title='Consultar Petições'
                                    >
                                    <Icon name='clipboard outline' />
                                    <Link to={'/criarPeticao'}> Criar Petição</Link>
                                </Button>

                            </div>
                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }
}

export default Servico;
