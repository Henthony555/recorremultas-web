import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, Icon } from 'semantic-ui-react';

const CardExampleGroups = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>Multa, por não identificação do condutor infrator, imposta à pessoa jurídica </Card.Header>
        <Card.Meta>Código da Infração: 5002 </Card.Meta>
        <Card.Description>
        <strong style={{color:'red'}}>R$880,41<br/> Gravíssima 3X - 7 pontos </strong>
        </Card.Description>
      </Card.Content>
          <Button animated basic color='none'>
          <Link to={'/formularioPeticao'}>
          <Button.Content visible>Próximo</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
          </Button.Content>
          </Link>
          </Button>

    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Estacionar nas vagas reservadas às pessoas com deficiência ou idosos, sem credencial que comprove tal condição. </Card.Header>
        <Card.Meta>Código da Infração: 7625 </Card.Meta>
        <Card.Description>
        <strong style={{color:'red'}}>R$293,47<br/> Gravíssima - 7 pontos </strong>
        </Card.Description>
      </Card.Content>
      <Button animated basic color='none'>
          <Link to={'/formularioPeticao'}>
          <Button.Content visible>Próximo</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
          </Button.Content>
          </Link>
          </Button>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>Dirigir veículo segurando telefone celular. </Card.Header>
        <Card.Meta>Código da Infração: 7633 </Card.Meta>
        <Card.Description>
        <strong style={{color:'red'}}>R$130,16<br/> Média - 4 pontos </strong>
        </Card.Description>
      </Card.Content>
      <Button animated basic color='none'>
          <Link to={'/formularioPeticao'}>
          <Button.Content visible>Próximo</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
          </Button.Content>
          </Link>
          </Button>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>Avançar o sinal vermelho do semáforo ou da parada obrigatória . </Card.Header>
        <Card.Meta>Código da Infração: 6050 </Card.Meta>
        <Card.Description>
        <strong style={{color:'red'}}>R$293,47<br/> Gravíssima - 7 pontos </strong>
        </Card.Description>
      </Card.Content>
      <Button animated basic color='none'>
          <Link to={'/formularioPeticao'}>
          <Button.Content visible>Próximo</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
          </Button.Content>
          </Link>
          </Button>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>Conduzir o veículo com a cor alterada . </Card.Header>
        <Card.Meta>Código da Infração: 6610 </Card.Meta>
        <Card.Description>
        <strong style={{color:'red'}}>R$195,23<br/> Grave - 5 pontos </strong>
        </Card.Description>
      </Card.Content>
      <Button animated basic color='none'>
          <Link to={'/formularioPeticao'}>
          <Button.Content visible>Próximo</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
          </Button.Content>
          </Link>
          </Button>
    </Card>

    <Card>
      <Card.Content>
        <Card.Header>Usar buzina prolongada e sucessivamente a qualquer pretexto . </Card.Header>
        <Card.Meta>Código da Infração: 6491 </Card.Meta>
        <Card.Description>
        <strong style={{color:'red'}}>R$88,38<br/> Leve - 3 pontos </strong>
        </Card.Description>
      </Card.Content>
      <Button animated basic color='none'>
          <Link to={'/formularioPeticao'}>
          <Button.Content visible>Próximo</Button.Content>
          <Button.Content hidden>
          <Icon name='arrow right' />
          </Button.Content>
          </Link>
          </Button>     
    </Card>

  </Card.Group>
)

export default CardExampleGroups
