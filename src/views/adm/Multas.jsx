import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, Modal, Table } from 'semantic-ui-react';
import { ENDERECO_API } from '../../util/Constantes';

const Multas = () => {
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState(null);
  const [listaMultas, setListaMultas] = useState([]);

  useEffect(() => {
    carregarLista();
  }, []);

  const carregarLista = () => {
    axios.get(ENDERECO_API + "api/multa/")
      .then((response) => {
        setListaMultas(response.data);
      })
      .catch((error) => {
        console.log('Erro ao carregar lista de multas:', error);
      });
  };

  const confirmaRemover = (id) => {
    setIdRemover(id);
    setOpenModal(true);
  };

  const remover = async () => {
    try {
      await axios.delete(ENDERECO_API + 'api/multa/' + idRemover);
      setOpenModal(false);
      console.log('Multa removida com sucesso.');
      carregarLista();
    } catch (error) {
      console.log('Erro ao remover multa:', error);
    }
  };

  return (
    <>
      <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
        <div style={{ marginTop: '3%' }}>
          <Container textAlign='justified'>
            <h1 style={{ fontSize: '3rem' }}>Multas</h1>
            <Divider />
            <div style={{ marginTop: '4%' }}>
              <Link to={'/admCadastroMulta'}>
                <Button inverted circular icon labelPosition='left' color='orange' floated='right'>
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
                  {listaMultas.map(multa => (
                    <Table.Row key={multa.id}>
                      <Table.Cell>{multa.codigo}</Table.Cell>
                      <Table.Cell>{multa.infracao}</Table.Cell>
                      <Table.Cell>{multa.valorMulta}</Table.Cell>
                      <Table.Cell>{multa.grauMulta}</Table.Cell>
                      <Table.Cell>{multa.pontosDescontados}</Table.Cell>
                      <Table.Cell textAlign='center'>
                        <Button inverted circular icon='edit' color='blue' title='Editar Multa'>
                          <Link to= "/admCadastroMulta" state={{ id: multa.id }} style={{ color: 'green' }}>
                            <Icon name='edit' />
                          </Link>
                        </Button>&nbsp;
                        <Button inverted circular icon='trash' color='red' title='Remover Multa' onClick={() => confirmaRemover(multa.id)} />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <br /><br /><br />
              <Link to={'/admGerenciarPeticao'}>
                <Button type="button" inverted circular icon labelPosition='left' color='orange'>
                  <Icon name='reply' />
                  Voltar
                </Button>
              </Link>
            </div>
          </Container>
        </div>
        <Modal
          basic
          onClose={() => setOpenModal(false)}
          onOpen={() => setOpenModal(true)}
          open={openModal}
        >
          <Header icon>
            <Icon name='trash' />
            Tem certeza que deseja remover esse registro?
          </Header>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
              <Icon name='remove' /> Não
            </Button>
            <Button color='green' inverted onClick={remover}>
              <Icon name='checkmark' /> Sim
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid>
    </>
  );
};

export default Multas;
