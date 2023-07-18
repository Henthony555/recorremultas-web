import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'firebase/compat/auth';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Icon, Table } from 'semantic-ui-react';


const firebaseApp = initializeApp( {
    apiKey: "AIzaSyC309U3GMWr0pcHXvktjH_fEOMB_B-ZVms",
    authDomain: "re-corre-multas.firebaseapp.com",
    databaseURL: "https://re-corre-multas-default-rtdb.firebaseio.com",
    projectId: "re-corre-multas",
    storageBucket: "re-corre-multas.appspot.com",
    messagingSenderId: "669467425665",
    appId: "1:669467425665:web:ae9577ef0515b756c0c680",
    measurementId: "G-EHR5PLXT9R"
});

export default function   () {
    const [userList, setUserList] = useState([]);
    const auth = getAuth();
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            // O usuário está autenticado, você pode acessar seus dados aqui
            const uid = user.uid;
            const email = user.email;
            
            // Outros dados do usuário
    
            console.log('Dados do usuário:', uid, email);
    
            // Atualiza a lista de usuários com os dados do usuário atual
            setUserList([{ id: uid, email }]);
          } else {
            // O usuário não está autenticado
            console.log('Usuário não autenticado');
          }
        });
    
        return () => unsubscribe();
      }, []);
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{ marginTop: '3%' }}>
                        <Container textAlign="justified">
                            <h1 style={{ fontSize: '3rem' }}> Registros</h1>
                            <Divider />

                            <h2>Lista de Usuários</h2>
                            
                            <Table celled>
                            <Table.Header>
                                <Table.Row>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>UID</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {userList.map((user) => (
                                <Table.Row key={user.id}>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>{user.uid}</Table.Cell>
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
                </Grid>
               
            </>
        )
    }

