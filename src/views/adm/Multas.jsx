import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, Modal, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../../util/Constantes';

class Multas extends React.Component {

    state = {
        openModal: false,
        idRemover: null,
        listaMultas: []

    }

    confirmaRemover = (id) => {

        this.setState({
            openModal: true,
            idRemover: id
             })  
    }

    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })
   
    };
 
    remover = async () => {

        await axios.delete(ENDERECO_API + 'api/multa' + this.state.idRemover)
        .then((response) => {
   
            this.setState({ openModal: false })
            console.log('Multa removida com sucesso.')
   
            axios.get(ENDERECO_API + "api/multa")
            .then((response) => {
           
                this.setState({
                    listaMultas: response.data
                })
            })
        })
        .catch((error) => {
            this.setState({  openModal: false })
            console.log('Erro ao remover uma Multa')
        })
 };
 

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

    };

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
                                    {this.state.listaMultas.map(multa => (
                                    <Table.Row>
                                        <Table.Cell>{multa.codigo}</Table.Cell>
                                        <Table.Cell>{multa.infracao}</Table.Cell>
                                        <Table.Cell>{multa.valorMulta}</Table.Cell>
                                        <Table.Cell>{multa.pontosDescontados}</Table.Cell>
                                        <Table.Cell>{multa.grauMulta}</Table.Cell>
                                        <Table.Cell textAlign='center'>

                                            <Button
                                                inverted
                                                circular
                                                icon='edit'
                                                color='blue'
                                                title='Clique aqui para editar os dados desta multa'>
                                                <Link to="/form-categoriaProduto" state={{ id: multa.id }} style={{ color: 'green' }}> <Icon name='edit'/> </Link>
                                                </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                icon='trash'
                                                color='red'
                                                title='Clique aqui para remover esta multa'
                                                onClick={e => this.confirmaRemover(multa.id)}  />
                                                

                                        </Table.Cell>
                                    </Table.Row>
                                    ))}
                                </Table.Body>
                                    
                                </Table>
                                {/*<br /><br /><br />
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
                                    </Link> */}
                            </div>
                        </Container>
                    </div>
                    <Modal
                   			basic
                   			onClose={() => this.setOpenModal(false)}
                   			onOpen={() => this.setOpenModal(true)}
                   			open={this.state.openModal}
               			>
                   			<Header icon>
                       				<Icon name='trash' />
                       				<div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
                   			</Header>
                   			<Modal.Actions>
                       				<Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                       					<Icon name='remove' /> Não
                       				</Button>
                       				<Button color='green' inverted onClick={() => this.remover()}>
                       					<Icon name='checkmark' /> Sim
                       				</Button>
                   			</Modal.Actions>
               			</Modal>

                </Grid>


            </>

        )
    }
}


export default Multas;
