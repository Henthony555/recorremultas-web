import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Form, Grid, Icon, Image, Segment } from 'semantic-ui-react';
import logo from '../../assets/img/logo.png';


class Cadastro extends React.Component {


    state = {

        nomeCompleto: null,
        cpf: null,
        email: null,
        dataNascimento: null,
        senha: null
    }


    render() {


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

        function salvar(){
        createUserWithEmailAndPassword(auth, this.state.email, this.state.senha)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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

                                        <Form.Input
                                            fluid
                                            icon='user circle'
                                            iconPosition='left'
                                            placeholder='Nome do usuário'
                                            value={this.state.nomeCompleto}
                                            onChange={e => this.setState({ nomeCompleto: e.target.value })}

                                        />

                                        <Form.Input
                                            fluid
                                            icon
                                            iconPosition='left'
                                        >
                                            <Icon name='address card' />
                                            <InputMask
                                                placeholder='CPF'
                                                mask="999.999.999-99"
                                                value={this.state.cpf}
                                                onChange={e => this.setState({ cpf: e.target.value })}
                                            />
                                        </Form.Input>

                                        <Form.Input
                                            fluid
                                            icon='envelope'
                                            iconPosition='left'
                                            placeholder='E-mail'

                                        />
                                        <Form.Input
                                            fluid
                                            icon
                                            iconPosition='left'
                                            value={this.state.email}
                                            onChange={e => this.setState({ email: e.target.value })}
                                        >
                                            <Icon name='calendar alternate' />
                                            <InputMask
                                                mask="99/99/9999"
                                                maskChar={null}
                                                placeholder="Data de Nascimento"
                                                value={this.state.dataNascimento}
                                                onChange={e => this.setState({ dataNascimento: e.target.value })}
                                            />
                                        </Form.Input>

                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Senha'
                                            type='password'
                                            value={this.state.senha}
                                            onChange={e => this.setState({ senha: e.target.value })}
                                        />

                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Confirmar senha'
                                            type='password'
                                            value={this.state.senha}
                                            onChange={e => this.setState({ senha: e.target.value })}
                                        />

                                        <Button color='yellow' fluid size='large' onClick={()=>salvar()}>
                                            Registrar
                                        </Button>

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
}

export default Cadastro;
