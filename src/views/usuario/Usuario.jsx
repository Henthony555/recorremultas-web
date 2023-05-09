import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Grid, Image, List, Icon, Form, } from 'semantic-ui-react';
import perfil from "../../assets/img/square-image.png";


class Servico extends React.Component {


    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    <div style={{marginTop: '4%'}}>
                        <Container textAlign="justified" >
                       <h1> Meus Dados </h1>
                            <Divider/>
                        
                            <div style={{marginTop:'5%'}}>

    <List animated verticalAlign='middle'>
        <table class="ui orange table">
        <thead class="">
            <tr class="">
                <th class="">           <h2 class="ui header"> <Image src={perfil} size='massive' circular/> Usuario </h2> </th>
                </tr>
                </thead>
                <tbody class="">

                 </tbody>
                    </table>
  
  <br></br><br></br>

    <List.Item>
    <Button as='a' basic tabIndex='0'
     title='Dados Cadastrados'>
          <Link to={'/dadosCadastrados'}> Dados cadastrados </Link>
      </Button>
    </List.Item>
                


                    <List.Item>
    <Button as='a' basic tabIndex='0'
     title='Historico de Petições'>
          <Link to={'/historicoPeticao'}> Histórico de Petições </Link>
      </Button>
    </List.Item>


                    <List.Item>
    <Button as='a' basic tabIndex='0'
     title='Alterar Senha'>
          <Link to={'/alterarSenha'}> Alterar Senha </Link>
      </Button>
    </List.Item>


                    </List>


 
                            </div>
                        </Container>
                    </div>
                </Grid>
                
               
            </>
            
        )
    }
}

export default Servico;
