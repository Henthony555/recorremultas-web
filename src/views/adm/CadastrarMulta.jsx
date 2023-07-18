import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Grid, Icon } from 'semantic-ui-react';
import axios from "axios";
import { ENDERECO_API } from '../../util/Constantes';
import { notifyError, notifySuccess } from '../../util/Util';

const CadastrarMulta = () => {
  const { state } = useLocation();

  const [IdMulta, setIdMulta] = useState();
  const [codigo, setCodigo] = useState("");
  const [infracao, setInfracao] = useState("");
  const [valorMulta, setValorMulta] = useState("");
  const [pontosDescontados, setPontosDescontados] = useState("");
  const [grauMulta, setGrauMulta] = useState("");

  useEffect(() => {
    if (state != null && state.id != null) {
      axios.get(ENDERECO_API + "api/multa/" + state.id)
        .then((response) => {
          const data = response.data;
          setIdMulta(data.id);
          setCodigo(data.codigo);
          setInfracao(data.infracao);
          setValorMulta(data.valorMulta);
          setPontosDescontados(data.pontosDescontados);
          setGrauMulta(data.grauMulta);
        })
        .catch((error) => {
          notifyError("Erro ao carregar dados da multa.");
        });
    }
  }, [state]);

  function salvar() {
    const multaRequest = {
      codigo: codigo,
      infracao: infracao,
      valorMulta: valorMulta,
      pontosDescontados: pontosDescontados,
      grauMulta: grauMulta
    };

    if (IdMulta != null) {
      // Alteração:
      axios.put(ENDERECO_API + "api/multa/" + IdMulta, multaRequest)
        .then((response) => {
          notifySuccess("Multa alterada com sucesso.");
        })
        .catch((error) => {
          notifyError("Erro ao alterar multa.");
        });
    } else {
      // Cadastro:
      axios.post(ENDERECO_API + "api/multa", multaRequest)
        .then((response) => {
          notifySuccess('Multa cadastrada com sucesso.');
        })
        .catch((error) => {
          notifyError('Erro ao incluir a multa.');
        });
    }
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
        <div style={{ marginTop: '3%' }}>
          <Container textAlign='justified' >
            {IdMulta === undefined ? (
              <h2>
                <span style={{ color: 'darkgray' }}> Multa &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro
              </h2>
            ) : (
              <h2>
                <span style={{ color: 'darkgray' }}> Multa &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração
              </h2>
            )}

            <Divider />
            <div style={{ marginTop: '4%' }}>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    fluid
                    width={3}
                    label='Artigo'
                    maxLength="10"
                    placeholder="EX.: art 181, VII"
                    value={codigo}
                    onChange={e => setCodigo(e.target.value)}
                  />

                  <Form.Input
                    required
                    fluid
                    width={14}
                    label='Infração'
                    placeholder="Informe a infração. Ex.: Estacionar o veículo nos acostamentos"
                    value={infracao}
                    onChange={e => setInfracao(e.target.value)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Input
                    required
                    fluid
                    label='Valor da Multa'
                    width={4}
                    placeholder="Ex.: R$ 88,98"
                    value={valorMulta}
                    onChange={e => setValorMulta(e.target.value)}
                  />
                  <Form.Input
                    required
                    fluid
                    label='Gravidade'
                    width={8}
                    placeholder="Ex.: Leve"
                    value={grauMulta}
                    onChange={e => setGrauMulta(e.target.value)}
                  />
                  <Form.Input
                    required
                    fluid
                    label='Pontos'
                    width={6}
                    placeholder="Ex.: 3"
                    value={pontosDescontados}
                    onChange={e => setPontosDescontados(e.target.value)}
                  />
                </Form.Group>
                <br /><br /><br />

                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='orange'
                >
                  <Icon name='reply' />
                  <Link to={'/admMultas'}>Voltar</Link>
                </Button>

                <Button
                  type="button"
                  inverted
                  circular
                  icon
                  labelPosition='left'
                  color='orange'
                  floated='right'
                  onClick={salvar}
                >
                  <Icon name='file alternate' />
                  Cadastrar
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      </Grid>
    </>
  );
}

export default CadastrarMulta;
