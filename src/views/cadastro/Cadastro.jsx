import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Icon, Image, Segment } from 'semantic-ui-react';
import logo from '../../assets/img/logo.png';
import { notifyError, notifySuccess } from '../../util/Util';


export default function Cadastro() {

   
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    
    


        const firebaseConfig = {
            apiKey: "AIzaSyC309U3GMWr0pcHXvktjH_fEOMB_B-ZVms",
            authDomain: "re-corre-multas.firebaseapp.com",
            databaseURL: "https://re-corre-multas-default-rtdb.firebaseio.com",
            projectId: "re-corre-multas",
            storageBucket: "re-corre-multas.appspot.com",
            messagingSenderId: "669467425665",
            appId: "1:669467425665:web:ae9577ef0515b756c0c680",
            measurementId: "G-EHR5PLXT9R"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);


        const auth = getAuth();

{/*    const { state } = useLocation();
	useEffect(() => {
		if (state != null && state.id != null) {
			axios.get(ENDERECO_API  + "api/usuario/" + state.id)
				.then((response) => {
					setIdUsuario(response.data.id)
					setNomeCompleto(response.data.nomeCompleto)
					setDataNascimento(response.data.dataNascimento)
					setCpf(response.data.cpf)
					setEmail(response.data.email)
					setSenha(response.data.senha)
				})
		}
        
	}, [state])*/} 

    {/* const [idUsuario, setIdUsuario] = useState();
	const [nomeCompleto, setNomeCompleto] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [cpf, setCpf] = useState();
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();*/} 

        function salvar(){  

           {/*  let usuarioRequest = {
                nomeCompleto: nomeCompleto,
                dataNascimento: dataNascimento,
                cpf: cpf,
                email: email,
                senha: senha
            }

            

        if (idUsuario != null) { //Alteração:
			axios.put(ENDERECO_API + "api/usuario/" + idUsuario, usuarioRequest)
				.then((response) => { notifySuccess('Usuario alterado com sucesso.')})
				.catch((error) => { if (error.response) {
					notifyError(error.response.data.errors[0].defaultMessage)
					} else {
					notifyError(mensagemErro)
					} 
		})
		} else { //Cadastro:
			axios.post(ENDERECO_API + "api/usuario/", usuarioRequest)
				.then((response) => { notifySuccess('Usuario cadastrado com sucesso.') 
				})
				.catch((error) => { if (error.response) {
					notifyError(error.response.data.errors[0].defaultMessage)
					} else {
					notifyError(mensagemErro)
					}  
				})
		}*/}

         
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Cadastro bem-sucedido
                const user = userCredential.user;
               
                notifySuccess('Usuário Cadastrado com sucesso!')
                
                // ...
            })
            .catch((error) => {
                //Erro ao cadastrar Usuário 
                const errorCode = error.code;
                const errorMessage = error.message;
                notifyError('Erro ao cadastrar o Usuário!');
                // ..
            });
            
    
        
	}

        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>

                    <Grid.Column style={{ maxWidth: 800 }}>
                        <Segment color='yellow'>
                            <Grid columns={2} divided>
                                <Grid.Column as='h2'>
                                    Criar uma conta
                                    <Form size='large' style={{ marginTop: '2%' }}>   
                                    {/* 
                                        <Form.Input
                                            fluid
                                            placeholder='Nome completo'
                                            value={nomeCompleto}
                                            onChange={e => setNomeCompleto(e.target.value )}
                                        />

                                        <Form.Input
                                            fluid
                                           
                                        >
                                            <InputMask
                                                mask="99/99/9999"
                                                maskChar={null}
                                                placeholder="Ex: 20/03/1985"
                                                value={dataNascimento}
                                                onChange={e => setDataNascimento(e.target.value)}
                                            />
                                        </Form.Input>
                                        <Form.Input
                                            fluid
                                        >
                                            <InputMask
                                                placeholder="CPF"
                                                mask="999.999.999-99"
                                                value={cpf}
                                                onChange={e => setCpf(e.target.value)}

                                        /></Form.Input>                   
                                    */} 
                                        <Form.Input
                                            fluid
                                            icon='envelope'
                                            iconPosition='left'
                                            placeholder='E-mail'
                                            value={email}
                                            onChange={e => setEmail(e.target.value )}

                                        />

                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Senha'
                                            type='password'
                                            value={senha}
                                            onChange={e => setSenha(e.target.value )}
                                        />

                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Confirmar senha'
                                            type='password'
                                            value={senha}
                                            onChange={e => setSenha(e.target.value )}
                                        />

                                        <Link to={'/'}>
                                        <Button color='yellow' fluid size='large' onClick={()=>salvar()}>
                                            Registrar
                                        </Button></Link>

                                    </Form>
                                </Grid.Column>

                                <Grid.Column>
                                    <Grid.Row>
                                        <Image src={logo} size="small" circular centered />

                                    </Grid.Row>
                                    <Grid.Row style={{ marginTop: '10%' }} >
                                        <Button color='google plus' size='large'>
                                            <Icon name='google plus g' /> Criar com o Google
                                        </Button>
                                    </Grid.Row>

                                    <Grid.Row style={{ marginTop: '15%' }} as='h4'>
                                        Já tem uma conta? &nbsp; <Link to={'/login'}>Entrar</Link>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Grid.Column>


                </Grid>
            </>
        )
    }

