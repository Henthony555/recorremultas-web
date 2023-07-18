import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Header, Icon, Modal, Table } from 'semantic-ui-react'
import { ENDERECO_API } from '../../util/Constantes';

    const Peticoes = () => {
        const [openModal, setOpenModal] = useState(false);
        const [idRemover, setIdRemover] = useState(null);
        const [listaPeticoes, setListaPeticoes] = useState([]);
        const [peticaoSelecionada, setPeticaoSelecionada] = useState(null);

        const abrirModalDetalhes = (peticao) => {
          setPeticaoSelecionada(peticao);
        };

    useEffect(() => {
        carregarLista();
      }, []);

    const carregarLista = () => {
        axios.get(ENDERECO_API + "api/peticao/")
          .then((response) => {
            setListaPeticoes(response.data);
          })
          .catch((error) => {
            console.log('Erro ao carregar lista de petições:', error);
          });
      };
      const confirmaRemover = (id) => {
        setIdRemover(id);
        setOpenModal(true);
      };
    
      const remover = async () => {
        try {
          await axios.delete(ENDERECO_API + 'api/peticao/' + idRemover);
          setOpenModal(false);
          console.log('Petição removida com sucesso.');
          carregarLista();
        } catch (error) {
          console.log('Erro ao remover petição:', error);
        }
      };
        
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '3%' }}>
                        <Container textAlign="justified">
                            <h1 style={{ fontSize: '3rem' }}> Petições</h1>
                            <Divider />

                            <Table color='orange' sortable celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Nome Completo</Table.HeaderCell>
                    <Table.HeaderCell>Nacionalidade</Table.HeaderCell>
                    <Table.HeaderCell>Estado Civil</Table.HeaderCell>
                    <Table.HeaderCell>Profissão</Table.HeaderCell>
                    <Table.HeaderCell>CNH</Table.HeaderCell>
                    <Table.HeaderCell>Órgão Expeditor</Table.HeaderCell>
                    <Table.HeaderCell>...</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {listaPeticoes.map(peticao => (
                    <Table.Row key={peticao.id}>
                      <Table.Cell>{peticao.nomeCompleto}</Table.Cell>
                      <Table.Cell>{peticao.nacionalidade}</Table.Cell>
                      <Table.Cell>{peticao.estadoCivil}</Table.Cell>
                      <Table.Cell>{peticao.profissao}</Table.Cell>
                      <Table.Cell>{peticao.cnh}</Table.Cell>
                      <Table.Cell>{peticao.orgaoExpeditor}</Table.Cell>
                      <Table.Cell>...</Table.Cell>
                      <Table.Cell textAlign='center'>
                        <Button inverted circular icon='edit' color='blue' title='Editar Petição'>
                          <Link to={{ pathname: "/admCadastroMulta", state: { id: peticao.id } }} style={{ color: 'green' }}>
                            <Icon name='edit' />
                          </Link>
                        </Button>&nbsp;
                        <Button inverted circular icon='trash' color='red' title='Remover Petição' onClick={() => confirmaRemover(peticao.id)} />&nbsp;
                        <Button inverted circular icon='eye' color='orange' title='Ver Petição' onClick={() => abrirModalDetalhes(peticao)} />
                      </Table.Cell>
                    </Table.Row>
                  ))}
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

                    {peticaoSelecionada && (
                    <Modal open={peticaoSelecionada !== null} onClose={() => setPeticaoSelecionada(null)}>
                        <Modal.Header>
                            <Icon name='paper plane' /> Detalhes da Petição
                        </Modal.Header>
                        <Modal.Content scrolling>

                            <>
                                <h5>Nome Completo: {peticaoSelecionada.nomeCompleto}</h5>
                                <h5>Nacionalidade: {peticaoSelecionada.nacionalidade}</h5>
                                <h5>Estado Civil: {peticaoSelecionada.estadoCivil}</h5>
                                <h5>Profissão: {peticaoSelecionada.profissao}</h5>
                                <h5>CNH: {peticaoSelecionada.cnh}</h5>
                                <h5>Orgão Expeditor: {peticaoSelecionada.orgaoExpeditor}</h5>
                                <h5>CPF: {peticaoSelecionada.cpf}</h5>
                                <h5>Telefone: {peticaoSelecionada.telefone}</h5>
                                <h5>Endereço Completo: {peticaoSelecionada.enderecoCompleto}</h5>
                                <h5>MarcaModelo: {peticaoSelecionada.marcaModelo}</h5>
                                <h5>Placa: {peticaoSelecionada.placa}</h5>
                                <h5>Renavam: {peticaoSelecionada.renavam}</h5>
                                <h5>Chassi: {peticaoSelecionada.chassi}</h5>
                                <h5>Orgão Emissor: {peticaoSelecionada.orgaoEmissor}</h5>
                                <h5>Notificação: {peticaoSelecionada.notificacao}</h5>
                                <h5>justificativa do Cancelamento: {peticaoSelecionada.justificativaCancelamento}</h5>
                                <h5>ID do Usuario: {peticaoSelecionada.id_usuario}</h5>
                                
                            </>

                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='orange' onClick={() => setPeticaoSelecionada(null)}>
                                Voltar <Icon name='chevron right' />
                            </Button>
                        </Modal.Actions>
                    </Modal>
                )}
                </Grid>

            </>
        )
    }
export default Peticoes;

