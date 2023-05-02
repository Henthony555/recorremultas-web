import React from "react";
import { Container, Grid, Image, List } from 'semantic-ui-react';

class Usuario extends React.Component{

    render(){
        return(
            <div>
                <div style={{marginTop: '5%'}}>

                <h2 class="ui header"><img src="/images/avatar/large/patrick.png" class="ui circular image"/> Usuario</h2>

<List animated verticalAlign='middle'>
    <List.Item>

      <List.Content>
        <List.Header> Dados Cadastados</List.Header>
      </List.Content>
    </List.Item>

    <List.Item>

      <List.Content>
        <List.Header> Suas Petições </List.Header>
      </List.Content>
    </List.Item>

    <List.Item>

      <List.Content>
        <List.Header> Alterar Senha </List.Header>
      </List.Content>
    </List.Item>

  </List>


                </div>
            </div>
        )
    }
}

export default Usuario;
