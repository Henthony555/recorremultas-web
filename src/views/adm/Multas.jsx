import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Icon, Table } from 'semantic-ui-react';

class Multas extends React.Component {
    render() {
        return (

            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '3%' }}>

                        <Container textAlign='justified' >

                            <h1 style={{ fontSize: '3rem' }}> Multas </h1>

                            <Divider />

                            <div style={{ marginTop: '4%' }}>
                                <Link to={'/admCadastroMulta'}>
                                    <Button
                                        inverted
                                        circular
                                        icon
                                        labelPosition='left'
                                        color='orange'
                                        floated='right'
                                    >
                                        <Icon name='clipboard outline' />
                                        Novo
                                    </Button>
                                </Link>
                                <br /><br /><br />

                                <Table color='orange' sortable celled>

                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Código</Table.HeaderCell>
                                            <Table.HeaderCell>Infração</Table.HeaderCell>
                                            <Table.HeaderCell>Valor da Multa</Table.HeaderCell>
                                            <Table.HeaderCell>Gravidade</Table.HeaderCell>
                                            <Table.HeaderCell>Pontos</Table.HeaderCell>
                                            <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                icon='edit'
                                                color='blue'
                                                title='Clique aqui para editar os dados deste cliente' /> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                icon='trash'
                                                color='red'
                                                title='Clique aqui para remover este cliente' />

                                        </Table.Cell>

                                    </Table.Body>
                                </Table>
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
                            </div>
                        </Container>
                    </div>
                </Grid>


            </>

        )
    }
}


export default Multas;
