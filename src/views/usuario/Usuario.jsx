import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Grid, Icon, Image } from 'semantic-ui-react';
import perfil from "../../assets/img/square-image.png";

const UserContext = React.createContext();

class Usuario extends React.Component {
  state = {
    userName: "John Doe", // Set a default value for now
    profilePhoto: perfil, // Set the default profile photo
  };

  handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        profilePhoto: reader.result, // Update the profile photo in the state
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <>
        <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
          <div style={{ marginTop: '3%' }}>
            <Container textAlign="justified">
              <h1 style={{ fontSize: '3rem' }}> Meus dados</h1>
              <Divider />

              <h2 className="ui header">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={this.handlePhotoUpload}
                  id="profile-photo-input"
                />
                <label htmlFor="profile-photo-input">
                  <Image src={this.state.profilePhoto} size='tiny' circular />
                </label>
                <UserContext.Consumer>
                  {userName => <span>{userName}</span>}
                </UserContext.Consumer>
              </h2>

              <br></br>

              <Link to={'/dadosCadastrados'}>
                <Button inverted icon size='huge' color='orange' labelPosition='left' >
                  <Icon name='calendar check ' /> Dados Cadastrados
                </Button>
              </Link>
              <br /> <br />
              <Link to={'/historicoPeticao'}>
                <Button inverted icon size='huge' color='orange' labelPosition='left' >
                  <Icon name='file' /> Historico Petições
                </Button>
              </Link>
            
              <br /> <br />
            </Container>
          </div>
        </Grid>
      </>
    );
  }
}

export default Usuario;
