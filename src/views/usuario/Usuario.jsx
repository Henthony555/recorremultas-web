import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Icon, Image } from 'semantic-ui-react';
import perfil from "../../assets/img/square-image.png";


class GerenciarPeticao extends React.Component {
    render() {
        return (

            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '3%' }}>
                        <Container textAlign="justified">
                            <h1 style={{fontSize:'3rem'}}> Meus dados</h1>
                            <Divider />

                            <h2 class="ui header"> <Image src={perfil} size='massive' circular/> Usuario </h2>

<br></br>
                            <>
                                <Link to={'/dadosCadastrados'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='calendar check ' />  Dados Cadastrados
                                    </Button>
                                </Link>
                                <br /> <br />
                                <Link to={'/historicoPeticao'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='file' /> Historico Cadastrados
                                    </Button>
                                </Link>
                                <br /> <br />
                                <Link to={'/alterarSenha'}>
                                    <Button inverted icon size='huge' color='orange' labelPosition='left' >
                                        <Icon name='save' /> Alterar Senha
                                    </Button>
                                </Link>
                                <br /> <br />



                            </>

                        </Container>
                    </div>
                </Grid>


            </>

        )
    }
}


export default GerenciarPeticao;