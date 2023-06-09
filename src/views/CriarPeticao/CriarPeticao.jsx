import React from "react";
import { Container, Divider, Grid, Icon } from 'semantic-ui-react';
import CardPeticao from "../componentes/card";



export default function CriarPeticao() {

        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '4%'}}>
                        <Container textAlign="justified">
                        
                            <h1 class="file alternate outline"> 
                                <Icon name='file alternate outline'/><Icon/>
                                Criar Petição 
                            </h1>
                         
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


