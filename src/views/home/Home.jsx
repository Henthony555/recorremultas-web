import React from "react";
<<<<<<< HEAD
import { Grid, Image } from 'semantic-ui-react';
import background from '../../assets/img/fundo.jpg';

=======
import { Grid } from 'semantic-ui-react';
>>>>>>> 016f478b4e1e9721755eebbb0e562b08b323664e

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
