import { Document, PDFDownloadLink, PDFViewer, Page, StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button, Grid, Icon } from 'semantic-ui-react';



const styles = StyleSheet.create({
    page: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingHorizontal: 25,
    },
    Titulo: {
        fontSize: 12,
        fontWeight: 900,
        marginBottom: 6
    },
    SubTitlo: {
        fontWeight: 900,
        fontSize: 12,
        margin: 6,
    },
    Texto: {
        margin: 6,
        fontSize: 11,
        textAlign: 'justify'
    },
    centro: {
        textAlign: 'center'
    }
});

// 
const PDF = ({ peticaoId }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            <Text style={styles.Titulo}>EXCELENTÍSSIMO(A) SENHOR(A) PRESIDENTE(A) DA JARI - JUNTA ADMINISTRATIVA DERECURSOS DE INFRAÇÕES</Text>

            <Text style={styles.Texto}>
                (Nome completo), nacionalidade: (nacionalidade), (estado civil), profissão: (profissão), Carteira Nacional de
                Habilitação(CNH) n. (CNH), expedida por (Órgão expedidor), CPF n. (CPF), telefone n. (Número), reside em:
            </Text>

            <Text style={styles.Texto}>
                (Endereço completo)
            </Text>

            <Text style={styles.Texto}>
                proprietário do veículo, modelo (Marca e modelo do veículo), placa (Placa do veículo), RENAVAM n. (Número do
                RENAVAM), chassi n. (Chassi do veículo), venho, com fulcro no Código de Trânsito Brasileiro (Lei Federal n.
                9.503, de 23 de setembro de 1997), interpor tempestivamente o presente:
            </Text>

            <Text style={[styles.SubTitlo, styles.centro]}>RECURSO</Text>

            <Text style={styles.Texto}>
                contra aplicação de penalidade por suposta infração de trânsito, pelos fundamentos de fato e de direito a seguir
                expostos.
            </Text>

            <Text style={styles.SubTitlo}>I - DOS FATOS</Text>

            <Text style={styles.Texto}>
                Na data de (data da multa), fui notificado pelo órgão: (órgão que emitiu a notificação), através da Notificação de
                imposição de Penalidade n. (Número da notificação), da aplicação da penalidade de multa no Valor de R$ (valor
                da multa) reais, além da perda de (Número de pontos descontados na Carteira) pontos na Carteira Nacional de
                Habilitação, pelo suposto cometimento da seguinte infração, prevista na legislação brasileira:
            </Text>

            <Text style={styles.Texto}>
                (suposta infração)
            </Text>

            <Text style={styles.SubTitlo}>II - DO DIREITO</Text>

            <Text style={styles.Texto}>
                Ocorre que a penalidade aplicada sequer tem razão de existir, visto que:
            </Text>

            <Text style={styles.Texto}>
                (razões pelas quais a penalidade deve ser cancelada)
            </Text>

            <Text style={styles.SubTitlo}>III - DOS PEDIDOS</Text>

            <Text style={styles.Texto}>
                Diante do exposto, requer o acolhimento do presente recurso e, consequentemente, o cancelamento da multa de
                trânsito imposta.
            </Text>

            <Text style={styles.Texto}>
                gualmente, solicito sejam anuladas quaisquer penalidades eventualmente aplicadas em decorrência da suposta
                infração, bem como excluídos os registros da respectiva falta no prontuário referente à minha Carteira Nacional
                de Habilitação (CNH).

            </Text>

            <Text style={styles.Texto}>Pede deferimento.</Text>

            <Text style={[styles.SubTitlo, styles.centro]}>
                ________________, ______ de _______ de ______
            </Text>

            <Text style={[styles.SubTitlo, styles.centro]}>
                ________________________________
            </Text>

            <Text style={[styles.SubTitlo, styles.centro]}>(Nome completo)</Text>
        </Page>
    </Document>
);

function PdfPeticao() {

    const location = useLocation();
    const peticaoId = location.state.id;
    
    return (
        <>
            <Grid textAlign='center' style={{ minHeight: '90vh', width: "100%" }}>

                <Grid.Row style={{ width: "100%", minHeight: '80vh' }}>
                    <PDFViewer style={{ width: '80%', height: '100vh' }}>
                        <PDF peticaoId={peticaoId} />
                    </PDFViewer>
                </Grid.Row>

                <Grid style={{ width: '60%' }}>
                    <Grid.Column floated='left' width={5}>

                        <Button
                            type="button"
                            inverted
                            circular
                            as={Link}
                            to='/formularioPeticao'
                            icon
                            labelPosition='left'
                            color='blue'
                        >
                            <Icon name='cancel' />
                            Cancelar
                        </Button>

                    </Grid.Column>

                    <Grid.Column floated='right' width={5}>

                        <PDFDownloadLink document={<PDF />} fileName="Peticao.pdf">
                            {({ loading }) => (loading ?
                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition='left'
                                    color='red'
                                >
                                    <Icon name='file pdf' />
                                    Baixando...
                                </Button> :
                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition='right'
                                    color='red'
                                >
                                    <Icon name='file pdf' />
                                    Baixar PDF
                                </Button>)}
                        </PDFDownloadLink>

                    </Grid.Column>
                </Grid>
            </Grid>



        </>
    );
}

export default PdfPeticao;