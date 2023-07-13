import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Form, Grid, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from "../../util/Constantes";
import { mensagemErro, notifyError, notifySuccess } from '../../util/Util';

export default function AdmAgencias() {

	const [idAgencias, setIdAgencias] = useState();
	const [nome, setNome] = useState();
	const [longitude, setLongitude] = useState();
	const [latitude, setLatitude] = useState();

	const { state } = useLocation();
	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get(ENDERECO_API + "api/adm/" + state.id)
				.then((response) => {
					setIdAgencias(response.data.id)
					setNome(response.data.nome)
					setLongitude(response.data.longitude)
					setLatitude(response.data.latitude)
				})
		}
	},[state])


	function salvar() {

		let agenciasRequest = {
			nome: nome,
			longitude: longitude,
			latitude: latitude
		}

		if (idAgencias != null) { //Alteração:
			axios.put(ENDERECO_API + "api/adm/" + idAgencias, agenciasRequest)
			.then((response) => {notifySuccess('Agência cadastrada com sucesso.')})
			.catch((error) => { console.log('Erro ao alterar uma agência.') })
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/adm", agenciasRequest)
			.then((response) => { console.log('Agência cadastrada com sucesso.') })
			.catch((error) => { if (error.response) {
				notifyError(error.response.data.errors[0].defaultMessage)
				} else {
				notifyError(mensagemErro)
				} 
				
		}) 
	}

    return (
        <>
            <Grid textAlign='center' verticalAlign='middle' style={{ miniHeight: '90vh' }}>
                <Grid.Column style={{ maxWidth: '90%'}}>
                    <Grid columns={2}>
                        <Grid.Column centered>

                            <Form size='large' style={{ marginTop: '2%', maxWidth: 500 }}>
                                <h2>Adicionar nova agência</h2>

                                <Form.Input
                                    fluid
                                    icon='map marker alternate'
                                    iconPosition='left'
                                    placeholder='Nome da agência'
                                    value={nome}
                                    onChange={e => this.setState({nome: e.target.value})}

                                />

                                <Form.Input
                                    fluid
                                    icon='map marker alternate'
                                    iconPosition='left'
                                    placeholder='Latitude'
                                    value={latitude}
                                    onChange={e => this.setState({latitude: e.target.value})}

                                />

                                <Form.Input
                                    fluid
                                    icon='map marker alternate'
                                    iconPosition='left'
                                    placeholder='Longitude'
                                    value={longitude}
                                    onChange={e => this.setState({longitude: e.target.value})}

                                />

							<Form.Group widths='equal' style={{ marginTop: '4%' }} className='form--agencia-salvar'>

								<Button
									type="button"
									inverted
									circular
									icon
									labelPosition='left'
									color='orange'
								>
									<Icon name='reply' />
									<Link to={'/Home'}>Voltar</Link>
								</Button>

								<Container textAlign='right'>
                                
                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='blue'
                                    floated='right'
                                    onClick={() => salvar()}
                                >
                                    <Icon name='save' />
                                    <Link to={'/listAgencias'}>Salvar</Link>
                                </Button>

							</Container>
						</Form.Group>
					</Form>
                </Grid.Column> 
            </Grid>
        </Grid.Column>
    </Grid>
   </>
   )   
}
}

