import React from 'react';
import { Container, Divider, Form, Grid, Icon } from 'semantic-ui-react';

class DadosCadastrados extends React.Component {
    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> <Icon name='clipboard outline'/><Icon/> Dados Cadastrado</h1>
                            <Divider/>

<div>
    <table class="ui orange table">
        <thead class="">
            <tr class="">
                <th class="">  </th>
                <th class="">  </th>
                <th class="">  </th>
                </tr>
                </thead>
                <tbody class="">
                 <tr class="">
                    <td class=""> Nome Completos: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Nome completo'width={0}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Nacionalidade: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Nacionalidade'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Estado Civil: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Estado Civil'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Profissão: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Profissão'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> CNH: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'CNH'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Órgão expedidor: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Órgão expedidor'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> CPF: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'CPF'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Telefone: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Nome completo'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Marca e modelo do veículo: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Marca e modelo do veículo'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                <tr class="">
                    <td class=""> Placa: </td>
                    <td class=""><Form.Input required size='small' placeholder = 'Placa'width={4}/></td>
                    <td class="">  <Icon name='edit'/><Icon/> </td>
                </tr>
                
                    </tbody>
                    </table>
</div>
                
                          
                        </Container>
                    </div>
                </Grid>
                
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
               
            </>
            
        )
    }
}

export default DadosCadastrados;