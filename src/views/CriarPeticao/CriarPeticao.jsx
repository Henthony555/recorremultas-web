import React from "react";
import { ENDERECO_API } from '../../util/Constantes';
import axios from 'axios';
import { Container, Divider, Grid, Icon, Button, Card } from 'semantic-ui-react';
import { Link } from "react-router-dom";
//import CardPeticao from "../componentes/card";


class CriarPeticao extends React.Component {

    state = {
        listaMultas: []
    }

    componentDidMount = () => {

        this.carregarLista();

    }
    carregarLista = () => {

        axios.get(ENDERECO_API + "api/multa")
            .then((response) => {

                this.setState({
                    listaMultas: response.data
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })

    };

    render() {
        return (

            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '4%' }}>
                        <Container textAlign="justified">

                            <h1 class="file alternate outline">
                                <Icon name='file alternate outline' /><Icon />
                                Criar Petição
                            </h1>

                            <Divider />

                            <h2 >Vamos começar?</h2>
                            <p> Encontre sua multa</p>

                            <Card.Group>

                                {this.state.listaMultas.map(multa => (
                                    <Card key={multa.id}>
                                        <Card.Content>
                                            <Card.Header>{multa.infracao}</Card.Header>
                                            <Card.Meta>Código da Infração: {multa.codigo} </Card.Meta>
                                            <Card.Description>
                                                <strong style={{ color: 'red' }}>R${multa.valorMulta}<br /> {multa.grauMulta} - {multa.pontosDescontados} pontos </strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Button animated basic color='none'>
                                            <Link to={'/formularioPeticao'}>
                                                <Button.Content visible>Próximo</Button.Content>
                                                <Button.Content hidden>
                                                    <Icon name='arrow right' />
                                                </Button.Content>
                                            </Link>
                                        </Button>

                                    </Card>
                                ))}

                            </Card.Group>


                        </Container>
                    </div>
                </Grid>


            </>

        )
    }
}

export default CriarPeticao;


