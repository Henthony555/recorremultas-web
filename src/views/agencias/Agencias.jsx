import React from "react";
import MapAgencias from "../../components/MapAgencias";
import { Grid, Segment, Container } from 'semantic-ui-react';

class Agencias extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' verticalAlign='middle' style={{ height: '90vh' }}>
                    <Grid.Column style={{ maxWidth: '90%' }}>
                        <Grid >
                            <Grid.Row>
                                <Container>
                                <Segment vertical>
                                    <h1>Agências</h1>
                                </Segment>
                                <Segment vertical>
                                    <h3>Insira seu endereço para ver a agência mais próxima de você.</h3>
                                </Segment>
                                </Container>
                            </Grid.Row>

                            <Grid.Row>
                                <MapAgencias />
                            </Grid.Row>
                        </Grid>

                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default Agencias;
