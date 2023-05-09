import React from 'react';
import { Container, Divider, Form, Grid, Icon } from 'semantic-ui-react';

class HistoricoPeticao extends React.Component {
    render() {
        return (
            
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle' >
                    <div style={{marginTop: '3%'}}>
                        <Container textAlign="justified">
                            <h1> <Icon name='clipboard outline'/><Icon/> Historico de Petições </h1>
                            <Divider/>

<div>
    <table class="ui orange table">
        <thead class="">
            <tr class="">
                <th class="">  </th>
                <th class=""> Voce ainda não tem nenhuma Petição criada </th>
                <th class="">  </th>
                </tr>
                </thead>
                <tbody class="">
                 <tr class="">
                    <td class=""> </td>
                    <td class=""> </td>
                    <td class=""> </td>
                </tr>
                <tr class="">
                    <td class=""> </td>
                    <td class=""> </td>
                    <td class=""> </td>
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

export default HistoricoPeticao;