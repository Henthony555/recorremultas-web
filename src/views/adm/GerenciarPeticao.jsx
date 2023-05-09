import React from 'react';
import { Button, Container, Divider, Grid, Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class GerenciarPeticao extends React.Component {
    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> Gerenciamento</h1>
                            <Divider/>
                            
                            <Button.Group vertical>
                            <Button  inverted icon
                                 color='orange' labelPosition='left' >
                                    <Icon name='paste' /><Link to={'/admMultas'}>Multas</Link></Button>
                            <Button  inverted icon
                                 color='orange' labelPosition='left' >
                                    <Icon name='file alternate' /><Link to={'/admPeticao'}>Petições</Link></Button>
                            <Button  inverted icon
                                 color='orange' labelPosition='left' >
                                    <Icon name='user' /><Link to={'/admRegistros'}>Registros</Link></Button>
                            
                            </Button.Group>

                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }
}
  

export default GerenciarPeticao;