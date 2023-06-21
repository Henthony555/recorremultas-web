import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Grid, Icon, Image, Segment } from 'semantic-ui-react';
import logo from '../../assets/img/logoGrande.png';

class Login extends React.Component {

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

        function logar(){
        signInWithEmailAndPassword(auth, this.state.email, this.state.senha)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert("Usuário Logado");
            // ...
          })
          .catch((error) => {
            alert("Usuário ou senha incorretos");
          });

        }

        return (
            <>
                <Grid textAlign='center' verticalAlign='middle' style={{ height: '90vh' }} >
                    <Grid.Column style={{ maxWidth: 450 }}>

                        <Image src={logo} size="medium" centered />
                        <Form size='large' style={{ marginTop: '2%' }}>
                            <Segment color='yellow' stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail'
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Senha'
                                    type='password'
                                />

                                <Link to={'/'}>
                                    <Button
                                    color='yellow'
                                     fluid 
                                     size='large'
                                     onClick={()=>logar()}
                                     >
                                        Entrar
                                    </Button>
                                </Link>

                                <Divider horizontal>OU</Divider>

                                <Button color='google plus' size='large'>
                                    <Icon name='google plus g' /> Entrar com o Google
                                </Button>

                                <Container as='h4' style={{ marginTop: '3%' }}>
                                    <Link to={'/esqueceuSenha'}>Esqueceu a senha?</Link>
                                </Container>
                            </Segment>
                        </Form>
                        <Segment as='h4' color='yellow'>
                            Não tem uma conta? &nbsp; <Link to={'/cadastro'}>Cadastre-se</Link>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}

export default Login;
