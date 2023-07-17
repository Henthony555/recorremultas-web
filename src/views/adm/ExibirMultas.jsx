import React from "react";
import { Card, Container, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const ExibirMultas = ({ multas }) => {
  return (
    <Container>
      <h2>
        <span style={{ color: 'darkgray' }}>
          Multas &nbsp;
          <Icon name='angle double right' size="small" />
        </span> Listagem
      </h2>
      <Card.Group>
        {multas.map(multa => (
          <Card key={multa.id}>
            <Card.Content>
              <Card.Header>{multa.codigo}</Card.Header>
              <Card.Meta>{multa.infracao}</Card.Meta>
              <Card.Description>
                <p>Valor da Multa: {multa.valorMulta}</p>
                <p>Gravidade: {multa.grauMulta}</p>
                <p>Pontos Descontados: {multa.pontosDescontados}</p>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <br />
      <Link to={'/admMultas'}>
        <Icon name='arrow left' />
        Voltar
      </Link>
    </Container>
  );
};

export default ExibirMultas;
