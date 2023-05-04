import React from "react";
import { Card, Grid, Header, Icon, Rating, Segment, Table } from 'semantic-ui-react';

class Avaliacao extends React.Component {

    render() {
        return (
            <>
                <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 850 }}>
                        <Segment.Group stacked>
                            <Segment color="Red">
                                <Header as='h3' color="red" icon>   
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
                        <Rating icon='star' defaultRating={5} maxRating={5}/>
                        </Table.Cell>
                        <Table.Cell textAlign="center">                   
                              <Card>                   
                                 <input type='text' placeholder='Feedback' maxLength={100} Fluid />
                            </Card>
                            
                        </Table.Cell>
                      
                    </Table.Row>
                 
                    </Table.Body>
                </Table>
            
                    </Grid.Column>
                </Grid >
            </>
        )
    }
}

export default Avaliacao;
