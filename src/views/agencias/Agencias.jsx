import React from "react";
import MapAgencias from "../../components/MapAgencias";
import { Grid } from 'semantic-ui-react';

class Agencias extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' verticalAlign='middle' style={{ height: '90vh' }}>
                    <Grid.Column style={{ maxWidth: '90%' }}>
                        <Grid columns={2}>
                            <Grid.Column textAlign='center'>
                                <h2>Agências</h2>
                            </Grid.Column>

                            <Grid.Column>
                                <MapAgencias />
                            </Grid.Column>
                        </Grid>

                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default Agencias;
