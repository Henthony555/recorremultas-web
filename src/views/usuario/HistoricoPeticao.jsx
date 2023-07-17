import { Document, PDFViewer, Page, StyleSheet } from '@react-pdf/renderer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Icon } from 'semantic-ui-react';
import { ENDERECO_API } from '../../util/Constantes';

const styles = StyleSheet.create({
  page: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },
  Titulo: {
    fontSize: 12,
    fontWeight: 900,
    marginBottom: 6,
  },
  SubTitlo: {
    fontWeight: 900,
    fontSize: 12,
    margin: 6,
  },
  Texto: {
    margin: 6,
    fontSize: 11,
    textAlign: 'justify',
  },
  centro: {
    textAlign: 'center',
  },
});

function PdfPeticao() {
  const [pdfList, setPdfList] = useState([]);

  useEffect(() => {
    axios
      .get(ENDERECO_API + 'api/pdf')
      .then((response) => {
        setPdfList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const gerarNovamentePDF = () => {
    axios
    .get(ENDERECO_API + 'api/pdf') // Endpoint para gerar o PDF novamente
    .then((response) => {
      // Criar um Blob a partir dos dados do PDF retornado pela API
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

      // Criar um URL temporário para o Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Abrir o PDF em uma nova janela ou aba do navegador
      window.open(pdfUrl, '_blank');
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <Grid textAlign="center" style={{ minHeight: '90vh', width: '100%' }}>
        <Grid.Row style={{ width: '100%', minHeight: '80vh' }}>
          <PDFViewer style={{ width: '80%', height: '100vh' }}>
            <Document>
              <Page size="A4" style={styles.page}>
                
              </Page>
            </Document>
          </PDFViewer>
        </Grid.Row>

        <Grid style={{ width: '60%' }}>
          <Grid.Column floated="left" width={5}>
            <Button
              type="button"
              inverted
              circular
              as={Link}
              to="/formularioPeticao"
              icon
              labelPosition="left"
              color="blue"
            >
              <Icon name="cancel" />
              Cancelar
            </Button>
          </Grid.Column>

          <Grid.Column floated="right" width={5}>
            {pdfList.map((pdf) => (
              <Button
                key={pdf.id}
                inverted
                circular
                icon
                labelPosition="right"
                color="red"
                onClick={() => gerarNovamentePDF()}
              >
                <Icon name="file pdf" />
                {pdf.name}Gerar
              </Button>
            ))}
          </Grid.Column>
        </Grid>
      </Grid>
    </>
  );
}

export default PdfPeticao;





