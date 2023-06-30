import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Grid, Icon } from 'semantic-ui-react';
import { Page, Text, Font, Document, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { ENDERECO_API } from '../../util/ENDERECO_API';

export default function FormularioPeticao() {

    const [nomeCompleto, setNomeCompleto] = useState();
    const [nacionalidade, setNacionalidade] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [profissao, setProfissao] = useState();
    const [cnh, setCnh] = useState();
    const [orgaoExpeditor, setOrgaoExpeditor] = useState();
    const [cpf, setCpf] = useState();
    const [telefone, setTelefone] = useState();
    const [enderecoCompleto, setEnderecoCompleto] = useState();
    const [marcaModelo, setMarcaModelo] = useState();
    const [placa, setPlaca] = useState();
    const [renavam, setRenavam] = useState();
    const [chassi, setChassi] = useState();
    const [dataMulta, setDataMulta] = useState();
    const [orgaoEmissor, setOrgaoEmissor] = useState();
    const [notificacao, setNotificacao] = useState();
    const [justificativaCancelamento, setJustificativaCancelamento] = useState();


    function salvar() {

        let peticaoRequest = {
            nomeCompleto: nomeCompleto,
            nacionalidade: nacionalidade,
            estadoCivil: estadoCivil,
            profissao: profissao,
            cnh: cnh,
            orgaoExpeditor: orgaoExpeditor,
            cpf: cpf,
            telefone: telefone,
            enderecoCompleto: enderecoCompleto,
            marcaModelo: marcaModelo,
            placa: placa,
            renavam: renavam,
            chassi: chassi,
            dataMulta: dataMulta,
            orgaoEmissor: orgaoEmissor,
            notificacao: notificacao,
            justificativaCancelamento: justificativaCancelamento
        }

        axios.post(ENDERECO_API + "api/peticao", peticaoRequest)
            .then((response) => { console.log('Formulário cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o Fomulário.') })

    }

    function formatarData(dataParam) {

		if (dataParam == null || dataParam == '') {
			return ''
		}

		let dia = dataParam.substr(8, 2);
		let mes = dataParam.substr(5, 2);
		let ano = dataParam.substr(0, 4);
		let dataFormatada = dia + '/' + mes + '/' + ano;

		return dataFormatada
	};


    return (

        <>
            <Grid textAlign='center' style={{ miniHeight: '90vh' }} verticalAlign='middle' >
                <div style={{ marginTop: '3%' }}>
                    <Container textAlign="justified">
                        <h1> Preencha o formulário de acordo com seus dados</h1>
                        <Divider />

                        <Form>
                            <Form.Group widths="equal">
                                <Form.Input required  label='Nome completo' value={nomeCompleto} onChange={e => setNomeCompleto(e.target.value)} />
                                <Form.Input required  label='Nacionalidade' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
                                <Form.Input required  label='Estado Civil' value={estadoCivil} onChange={e => setEstadoCivil(e.target.value)} />
                                <Form.Input required  label='Profissão' value={profissao} onChange={e => setProfissao(e.target.value)} />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input required  label='CNH' value={cnh} onChange={e => setCnh(e.target.value)} />
                                <Form.Input required  label='Órgão expedidor' value={orgaoExpeditor} onChange={e => setOrgaoExpeditor(e.target.value)} />
                                <Form.Input required  label='CPF'>
                                <InputMask
										mask="999.999.999-99"
										value={cpf}
										onChange={e => setCpf(e.target.value)}
									/>
                                </Form.Input>
                                <Form.Input required  label='Telefone'>
                                <InputMask
										mask="(99) 9999.9999"
										value={telefone}
										onChange={e => setTelefone(e.target.value)}
									/>
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.TextArea required label='Endereço completo' value={enderecoCompleto} onChange={e => setEnderecoCompleto(e.target.value)} />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input required  label='Marca e modelo do veículo' value={marcaModelo} onChange={e => setMarcaModelo(e.target.value)} />
                                <Form.Input required  label='Placa' value={placa} onChange={e => setPlaca(e.target.value)} />
                                <Form.Input required  label='Número do RENAVAM' value={renavam} onChange={e => setRenavam(e.target.value)} />
                                <Form.Input required  label='Chassi do veículo' value={chassi} onChange={e => setChassi(e.target.value)} />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input required  label='Data da multa'>
                                <InputMask
										mask="99/99/9999"
										maskChar={null}
										placeholder="Ex: 20/03/1985"
										value={dataMulta}
										onChange={e => setDataMulta(e.target.value)}
									/>
                                </Form.Input>
                                <Form.Input required  label='Orgão que emitiu a notificação' value={orgaoEmissor} onChange={e => setOrgaoEmissor(e.target.value)} />
                                <Form.Input required  label='Número da notificação' value={notificacao} onChange={e => setNotificacao(e.target.value)} />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.TextArea required label='Razões pelas quais a penalidade deve ser cancelada' value={justificativaCancelamento} onChange={e => setJustificativaCancelamento(e.target.value)}/>
                            </Form.Group>

                            <Button
                                animated
                                inverted
                                circular
                                //as={Link}
                                //to="/pdf"
                                icon
                                labelPosition='left'
                                color='orange'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='file pdf outline' />
                                Gerar PDF
                            </Button>

                        </Form>


                    </Container>
                </div>
            </Grid>


        </>

    )
}