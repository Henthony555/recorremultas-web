import axios from 'axios';
import React from 'react';
import { Button, Container, Divider, Grid, Icon, Table } from 'semantic-ui-react';

class DadosCadastrados extends React.Component {
  state = {
    listaDadosCadastrados: []
  }

  componentDidMount() {
    this.carregarLista();
  }

  carregarLista = () => {
    axios.get("http://localhost:5438/api/peticao")
      .then((response) => {
        this.setState({
          listaDadosCadastrados: response.data
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  formatarData = (dataParam) => {
    if (dataParam == null || dataParam === '') {
      return '';
    }

    let dia = dataParam.substr(8, 2);
    let mes = dataParam.substr(5, 2);
    let ano = dataParam.substr(0, 4);
    let dataFormatada = dia + '/' + mes + '/' + ano;

    return dataFormatada;
  };

  render() {
    return (
      <>
        <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
          <div style={{ marginTop: '3%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container textAlign="justified">
              <h1> <Icon name='clipboard outline' /><Icon /> Dados Cadastrados</h1>
              <Divider />

              <br /><br /><br />

              <Table color='orange' sortable celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Nome Completo</Table.HeaderCell>
                    <Table.HeaderCell>Nacionalidade</Table.HeaderCell>
                    <Table.HeaderCell>Estado Civil</Table.HeaderCell>
                    <Table.HeaderCell>Profissão</Table.HeaderCell>
                    <Table.HeaderCell>CNH</Table.HeaderCell>
                    <Table.HeaderCell>Órgão expedidor</Table.HeaderCell>
                    <Table.HeaderCell>CPF</Table.HeaderCell>
                    <Table.HeaderCell>Telefone</Table.HeaderCell>
                    <Table.HeaderCell>Marca e modelo do veículo</Table.HeaderCell>
                    <Table.HeaderCell>Placa</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.state.listaDadosCadastrados.map((dadosCadastrados, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{dadosCadastrados.nomeCompleto}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.nacionalidade}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.estadoCivil}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.profissao}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.cnh}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.orgaoExpeditor}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.cpf}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.telefone}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.marcaModelo}</Table.Cell>
                      <Table.Cell>{dadosCadastrados.placa}</Table.Cell>
                      <Table.Cell textAlign='center'>
                        <Button
                          inverted
                          circular
                          icon='trash'
                          color='red'
                          title='Clique aqui para remover este cliente'
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Container>
          </div>
        </Grid>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </>
    );
  }
}

export default DadosCadastrados;
