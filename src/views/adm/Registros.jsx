import React from "react";
import { Button, Container, Divider, Grid, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Registros extends React.Component{
    render(){
        return(
            <>
            <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> Registros</h1>
                            <Divider/>

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
                        </Container>
                    </div>
                </Grid>
            </>
        )
    }

}

export default Registros;