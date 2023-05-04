import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Grid, Image, List } from 'semantic-ui-react';
import perfil from "../../assets/img/square-image.png";

class Servico extends React.Component {


    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    <div style={{marginTop: '4%'}}>
                        <Container textAlign="justified" >
                        <h1 class="ui header"> <Image src={perfil} size='massive' circular/> Usuario</h1>
                            <Divider/>
                        
                            <div style={{marginTop:'5%'}}>
                               
                            

     <List animated verticalAlign='middle'>
  
     <List.Item>
    <Button as='a' basic tabIndex='0'
     title='Dados Cadastrados'>
          <Link to={'/'}> Dados cadastrados </Link>
      </Button>
    </List.Item>

    <List.Item>
    <Button as='a' basic tabIndex='0'
     title='Dados Cadastrados'>
          <Link to={'/'}> Histórico de Petições </Link>
      </Button>
    </List.Item>


    <List.Item>
    <Button as='a' basic tabIndex='0'
     title='Dados Cadastrados'>
          <Link to={'/esqueceuSenha'}> Alterar Senha </Link>
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
