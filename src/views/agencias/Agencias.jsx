import React from "react";
import MapAgencias from "../../components/MapAgencias";
import { Grid } from 'semantic-ui-react';

class Agencias extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' verticalAlign='middle' style={{ height: '90vh' }}>
                    <Grid.Column style={{ maxWidth: 600}}>
                        <MapAgencias />
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default Agencias;
