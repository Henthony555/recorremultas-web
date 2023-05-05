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

                                <Form size='large' style={{ marginTop: '2%', maxWidth: 600 }}>
                                    <h2>ADD Agência</h2>
                                    <Form.Input
                                        fluid
                                        icon='user circle'
                                        iconPosition='left'
                                        placeholder='Nome do usuário'
                                    />

                                    <Form.Input
                                        fluid
                                        icon
                                        iconPosition='left'
                                    >
                                        <Icon name='address card' />
                                        <InputMask
                                            placeholder='CPF'
                                            mask="999.999.999-99"
                                        />
                                    </Form.Input>

                                    <Button color='yellow' fluid size='large'>
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
