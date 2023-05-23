import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Icon } from 'semantic-ui-react';


class GerenciarPeticao extends React.Component {
    render() {
        return (

            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '3%' }}>
                        <Container textAlign="justified">
                            <h1 style={{fontSize:'3rem'}}> Gerenciamento</h1>
                            <Divider />

                            <>
                                <Link to={'/admAgencias'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='building' />Adicionar Agências
                                    </Button>
                                </Link>
                                <br /> <br />
                                <Link to={'/admMultas'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='paste' />Multas
                                    </Button>
                                </Link>
                                <br /> <br />
                                <Link to={'/admPeticao'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='file alternate' />Petições
                                    </Button>
                                </Link>
                                <br /> <br />
                                <Link to={'/admRegistros'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='user' />Registros
                                    </Button>
                                </Link>



                            </>

                        </Container>
                    </div>
                </Grid>


            </>

        )
    }
}


export default GerenciarPeticao;