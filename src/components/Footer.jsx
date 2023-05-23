import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Popup, Segment } from 'semantic-ui-react';


export default function Footer() {

    return (
        <>
            <Segment vertical color='yellow' style={{ marginTop: '4%' }} >
                <Grid columns={3} textAlign='center' verticalAlign='middle'>
                    <Grid.Column>
                        &nbsp;
                        &nbsp;
                        <Link target="_blank"
                            to={"https://pt-br.facebook.com/"}>
                            <Popup content='Sega-nos no Facebook' trigger={
                                <Button circular
                                    color='facebook'
                                    icon='facebook' />
                            } />
                        </Link>&nbsp;
                        <Link target="_blank"
                            to={"https://www.instagram.com/"}>
                            <Popup content='Sega-nos no Instagram' trigger={
                                <Button circular
                                    color='pink'
                                    icon='instagram' />
                            } />
                        </Link>&nbsp;
                        <Link target="_blank"
                            to={"https://github.com/Henthony555/recorremultas-web.git"}>
                            <Popup content='Olhe nosso repositório no GitHub' trigger={
                                <Button circular
                                    color='black'
                                    icon='github' />
                            } />
                        </Link>

                    </Grid.Column>

                    <Grid.Column as='h4'>
                        Projeto feito com propósitos acadêmicos - IFPE Jaboatão
                    </Grid.Column>

                    <Grid.Column textAlign="right">
                        <strong>&copy; 2023, Feito com  &#x1F49B; por RCM Team</strong> &nbsp; &nbsp;
                    </Grid.Column>
                </Grid>
            </Segment>
        </>
    )
}

