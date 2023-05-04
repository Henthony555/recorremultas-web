import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import background from '../../assets/img/fundo.jpg';


class Home extends React.Component {

    render() {
        return (
            <>
             <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    Seja Bem Vindo!
                   <Image src={background}  fluid />
                   
            </Grid>

           
             <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
                    Seja Bem Vindo!
                </Grid>

          </>
       )
    }
}

export default Home;
