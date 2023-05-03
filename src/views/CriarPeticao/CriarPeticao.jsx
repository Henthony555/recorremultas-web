import React from "react";
import { Container, Divider, Grid } from 'semantic-ui-react';
import CardPeticao from "../componentes/card";
class CriarPeticao extends React.Component {


    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> Criar Petição </h1>
                            <Divider/>
                        
                            <h2 >Vamos começar?</h2>
                            <p> Encontre sua multa</p>
                            

                            <CardPeticao/>
                            
                          
                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }
}

export default CriarPeticao;
