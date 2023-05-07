import React from "react";
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import MapAgencias from "../../components/MapAgencias";
import { Button, Form, Grid, Image, Container, Segment, Divider, Icon } from 'semantic-ui-react'

class ADMagencias extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' verticalAlign='middle' style={{ height: '90vh' }}>
                    <Grid.Column style={{ maxWidth: '90%' }}>
                        <Grid columns={2}>
                            <Grid.Column centered>

                                <Form size='large' style={{ marginTop: '2%', maxWidth: 500 }}>
                                    <h2>Adicionar nova agência</h2>

                                    <Form.Input
                                        fluid
                                        icon='map marker alternate'
                                        iconPosition='left'
                                        placeholder='Nome da agência'
                                    />

                                    <Form.Input
                                        fluid
                                        icon='map marker alternate'
                                        iconPosition='left'
                                        placeholder='Latitude'
                                    />

                                    <Form.Input
                                        fluid
                                        icon='map marker alternate'
                                        iconPosition='left'
                                        placeholder='Longitude'
                                    />

                                    <Button color='yellow' size='large'>
                                        Adicionar
                                    </Button>

                                </Form>
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

export default ADMagencias;
