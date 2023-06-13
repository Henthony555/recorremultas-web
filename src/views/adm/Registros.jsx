import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Icon } from 'semantic-ui-react';

class Registros extends React.Component {
    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '3%' }}>
                        <Container textAlign="justified">
                            <h1 style={{ fontSize: '3rem' }}> Registros</h1>
                            <Divider />

                            <br /><br /><br />
                            <Link to={'/admGerenciarPeticao'}>
                                <Button
                                    type="button"
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                >
                                    <Icon name='reply' />
                                    Voltar
                                </Button>
                            </Link>
                        </Container>
                    </div>
                </Grid>
            </>
        )
    }

}

export default Registros;