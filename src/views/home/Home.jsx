import React from "react";
import { Container, Grid, Header, Icon, Image, Rating, Segment, Statistic, Table } from 'semantic-ui-react';
import bacgrounds from '../../assets/img/telahome.png';

class Home extends React.Component {

    render() {
        return (
            <>
        
             <Grid >       
                <Image src={ bacgrounds}  fluid /> 
           </Grid>

             <Grid textAlign='center' as='h2'  >
                 <Container text>
                            <p>

                            

                            </p>
                            <p> 
                                Bem-vindo ao nosso site! 
                            Nossa Missão é ajudá-lo a recorrer a multas de trânsito. 
                            Sabemos que receber uma multa de trânsito pode ser frustrante e estressante,
                            mas estamos aqui para ajudá-lo a entender seus direitos e opções para recorrer 
                            a essas infrações.
                            </p>

                            <p>
                                 Nós entendemos que há muitos motivos pelos quais você pode ter recebido uma multa,
                             e estamos aqui para ajudá-lo a entender o processo de recorrer a ela. Sabemos que 
                             pode ser difícil lidar com esses assuntos sozinho, mas estamos aqui para guiá-lo 
                             através dos passos necessários para recorrer a sua multa com confiança.
                            </p>
                       
                            <p>
                                Em nosso site, você encontrará informações valiosas sobre o processo de recorrer a multas,
                             incluindo as etapas necessárias para apresentar uma defesa prévia, como funciona o sistema 
                             de pontuação de motoristas e muito mais. Além disso, nosso site apresenta dicas úteis para
                             ajudá-lo a evitar multas no futuro e manter-se seguro nas estradas.
                            </p>

                            <p>
                                Nossa equipe está pronta para ajudá-lo em todas as etapas do processo, desde a análise 
                            da sua multa até a apresentação da sua defesa. Entendemos que cada caso é único, e estamos 
                            comprometidos em fornecer uma abordagem personalizada para atender às suas necessidades 
                            específicas.
                            </p>
                     
                  </Container>
             </Grid>
           
             <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                 <Grid.Column style={{ maxWidth: 850 }}>
                        <Segment.Group stacked>
                            <Segment color="Red">
                                <Header as='h2' color="red" icon>   
                                    <Icon name='thumbs up outline' /> Avalie nosso site </Header>
                                </Segment>
                        </Segment.Group>

                 <Table celled padded>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Avaliação</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Deixe seu comentário ou Sugestão</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell textAlign="center">
                        <Rating icon="star" defaultRating={5} maxRating={5}/>
                        </Table.Cell>
                        <Table.Cell textAlign="center">                   
                            <div class="ui form success">
                                <div class="field">
                                    <input type="text" placeholder="Deixe sua sugestão ou Comentário"></input>
                                </div>
                                <div class="ui success message">
                                    <div class="header"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Comentário salvo</font></font></div>
                                </div>
                                <div class="ui submit button"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Enviar</font></font></div>
                                </div>
                            
                        </Table.Cell>                  
                    </Table.Row>
                    </Table.Body>
                </Table>
            
             </Grid.Column>
        </Grid >

                  <Grid verticalAlign="center">
                       <Segment inverted >
                                    <Statistic color='red' inverted>
                                    <Statistic.Value>1000</Statistic.Value>
                                    <Statistic.Label>Petições Aceitas</Statistic.Label>
                                    </Statistic>
                                    <Statistic color='orange' inverted>
                                    <Statistic.Value>1050</Statistic.Value>
                                    <Statistic.Label>Petições Baixadas</Statistic.Label>
                                    </Statistic>
                                    <Statistic color='yellow' inverted>
                                    <Statistic.Value>500</Statistic.Value>
                                    <Statistic.Label>CNH SALVAS!</Statistic.Label>
                                    </Statistic>
                       </Segment>     

                  </Grid>
          
          </>
       )
    }
}

export default Home;

