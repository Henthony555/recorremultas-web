import React from "react";
import { Link } from "react-router-dom";
import { Segment, Icon, Button, Grid, Popup } from 'semantic-ui-react';


class Footer extends React.Component {

    render() {
        return (
            <>
                <Segment vertical color='yellow'>
                    <Grid columns='equal'>
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

                        <Grid.Column textAlign="right">
                            <strong>&copy; 2023, Feito com  &#x1F49B; por RCM Team</strong> &nbsp; &nbsp;
                        </Grid.Column>
                    </Grid>
                </Segment>
            </>
        )
    }
}

export default Footer;
