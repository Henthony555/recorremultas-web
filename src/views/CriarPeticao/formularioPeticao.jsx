import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Divider, Form, Grid, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../util/ENDERECO_API';

export default function FormularioPeticao () {
   
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
	useEffect(() => {
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
	},[state])
    

    function salvar() {

        let peticaoRequest = {
            nomeCompleto: nomeCompleto,
            nacionalidade: nacionalidade,
            estadoCivil: estadoCivil,
            profissao: profissao,
            cnh:cnh,
            orgaoExpeditor:orgaoExpeditor,
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
 

        return (
            
            <>
                <Grid textAlign='center' style={{ miniHeight: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> Dados Petição</h1>
                            <Divider/>
                        
                            <h4 >Preencha o formulário de acordo com seus dados</h4>

                            <h3 textAlign='center'> EXCELENTÍSSIMO(A) SENHOR(A) PRESIDENTE(A) DA JARI - JUNTA ADMINISTRATIVA DE RECURSOS DE INFRAÇÕES,</h3><br/>
                            {/* */}
                            <Form textAlign="justified">
                                <Form.Group   >   
                                    <Form.Input required size='small' placeholder = 'Nome completo'width={4}/>
                                    <p>, nacionalidade:</p>
                                    <Form.Input required size='small' placeholder= 'Nacionalidade'/>
                                    <Form.Input required size='small' placeholder= 'Estado Civil'/>
                                    <p>, profissão</p>
                                    <Form.Input required size='small' placeholder= 'Profissão' />,
                                </Form.Group>

                                <Form.Group>   
                                    <p> Carteira Nacional de Habilitação (CNH) n°</p>
                                    <Form.Input required size='small' placeholder= '(CNH)'/>
                                    <p>, expedida por</p>
                                    <Form.Input required size='small' placeholder= 'Órgão expedidor'/>
                                    <p>, CPF n°</p>
                                    <Form.Input required size='small' placeholder= 'CPF' width={3}/>,
                                </Form.Group>

                                <Form.Group> 
                                    <p> telefone n°</p>
                                    <Form.Input required size='small' placeholder= 'Telefone'/>
                                    <p>, reside em:</p>
                                    <Form.Input required size='small' placeholder= 'Endereço completo' width={'10'}/>,
                                </Form.Group>
                                
                                <Form.Group> 
                                    <p> proprietário do veículo modelo</p>
                                    <Form.Input required size='small' placeholder= 'Marca e modelo do veículo' width={'5'}/>
                                    <p>, placa</p>
                                    <Form.Input required size='small' placeholder= 'Placa'/>
                                    <p>RENAVAM n°</p>
                                    <Form.Input required size='small' placeholder= 'Número do RENAVAM'/>,
                                </Form.Group>
                                
                                <Form.Group> 
                                    <p>chassi n°</p>
                                    <Form.Input required size='small' placeholder= 'Chassi do veículo'/>
                                    <p>, venho, com fulcro no Código de Trânsito Brasileiro (Lei Federal n.
                                    9.503, de 23 de setembro de 1997), interpor tempestivamente o presente:</p>
                                </Form.Group>
                                
                                <h3 style={{textAlign:'center'}}>RECURSO</h3>

                                <p>contra aplicação de penalidade por suposta infração de trânsito, pelos fundamentos de fato e de direito a seguir expostos.</p>
                            
                                <h3>I - DOS FATOS</h3>
                                <Form.Group> 
                                    <p>Na data de </p>
                                    <Form.Input required size='small' placeholder= 'Data da multa' width={'2'}/>
                                    <p>, fui notificado pelo órgão:</p>
                                    <Form.Input required size='small' placeholder= 'Orgão que emitiu a notificação'/>
                                    <p>, através da Notificação de imposição de Penalidade n°</p>
                                    <Form.Input required size='small' placeholder= 'Número da notificação'/>,
                                </Form.Group>
                                <Form.Group> 
                                    <p> da aplicação da penalidade de multa no Valor de R$</p>
                                    <Form.Input required size='small' placeholder= 'Valor da multa' width={'2'}/>
                                    <p>reais, além da perda de</p>
                                    <Form.Input required size='small' placeholder= 'Número de pontos descontados na Carteira'/>
                                    <p>, pontos na Carteira Nacional de Habilitação, </p>
                                </Form.Group>
                                <Form.Group> 
                                    <p> pelo suposto cometimento da seguinte infração, prevista na legislação brasileira:</p>
                                    <Form.Input required size='small' placeholder= 'Suposta infração' />
                                </Form.Group>
                                
                                <h3>II - DO DIREITO</h3>
                            
                                <p>Ocorre que a penalidade aplicada sequer tem razão de existir, visto que:</p>
                        
                                <Form.TextArea required  placeholder= 'Razões pelas quais a penalidade deve ser cancelada' width={15}/>

                                <h3>III - DOS PEDIDOS</h3>

                                <p>Diante do exposto, requer o acolhimento do presente recurso e, consequentemente, o cancelamento da multa de trânsito imposta.</p>
                                <p>Igualmente, solicito sejam anuladas quaisquer penalidades eventualmente aplicadas em decorrência da suposta infração, bem como excluídos os registros da respectiva falta no prontuário referente à minha Carteira Nacional de Habilitação (CNH).</p>

                                <p>Pede deferimento.</p>
                                <br/>
                                <br/>
                                <p style={{textAlign:'center'}}>____________________, ______ de _______ de ______</p>
                                <br/>
                                <p style={{textAlign:'center'}}>________________________________</p>
                                <br/>
                                <br/>
                                <Button
                                    animated
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='orange'
                                    floated='right'
                                >
                                    <Icon name='file alternate' />
                                    <Link to={'/'}>
                                    Gerar
                                    </Link>
                                </Button>

                            </Form>
                         
              
                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }