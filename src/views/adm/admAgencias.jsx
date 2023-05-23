import React, { useState } from "react";
import { Button, Form, Grid } from 'semantic-ui-react';
import MapAgencias from "../../components/MapAgencias";

export default function ADMagencias() {

   
        return (
            <>
                <Grid textAlign='center' verticalAlign='middle' style={{ miniHeight: '90vh' }}>
                    <Grid.Column style={{ maxWidth: '90%'}}>
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
    
};


