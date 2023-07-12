import axios from 'axios';
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
=======
import { useLocation, useNavigate } from 'react-router-dom';
>>>>>>> 7049d157a728f8b9f955f3231134d151d3fce5c5
import { Button, Container, Divider, Form, Grid, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../util/Constantes';

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

    const { state } = useLocation();
    //const navigate = useNavigate();
	useEffect(() => {

  if(localStorage.getItem('user') != null){


		if (state != null && state.id != null) {
			axios.get(ENDERECO_API + "api/peticao" + state.id)
				.then((response) => {
					setNomeCompleto(response.data.nome)
					setNacionalidade(response.data.nacionalidade)
					setEstadoCivil(response.data.estadoCivil)
					setProfissao(response.data.profissao)
					setCnh(response.data.cnh)
					setOrgaoExpeditor(response.data.orgaoExpeditor)
					setCpf(response.data.cpf)
	                setTelefone(response.data.telefone)
                    setEnderecoCompleto(response.data.enderecoCompleto)
                    setMarcaModelo(response.data.marcaModelo)
	                setPlaca(response.data.placa)
		            setRenavam(response.data.renavam)
	                setChassi(response.data.chassi)
	                setDataMulta(response.data.dataMulta)
	                setOrgaoEmissor(response.data.orgaoEmissor)
					setNotificacao(response.data.notificacao)
	                setJustificativaCancelamento(response.data.justificativaCancelamento)
				})
		}

    }else{
        window.location.href = 'http://localhost:3000/';
    }
	},[state])
    

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

        localStorage.setItem('peticao', JSON.stringify(peticaoRequest));

        axios.post(ENDERECO_API + "api/peticao", peticaoRequest)
            .then((response) => { 
                console.log('Formulário cadastrado com sucesso.')
                //avigate("/pdf", { peticaoRequest: peticaoRequest });
            })
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
                                as={Link}
                                to={{
                                    pathname: '/pdf',
                                    state: { id: state?.id  }
                                  }}
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