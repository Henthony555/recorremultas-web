import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        paddingTop: 25,
        paddingBottom: 25,
        paddingHorizontal: 25,
    },
    Titulo: {
        fontSize: 18
    },
    SubTitlo: {
        fontSize: 14,
        margin: 12,
    },
    Texto: {
        margin: 12,
        fontSize: 12,
        textAlign: 'justify'
    }
});

// Create Document Component
const PDF = () => (
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

            <Text style={styles.SubTitlo}>RECURSO</Text>

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
                (razões pelas quais a penalidade deve ser cancelada)
            </Text>

            <Text style={styles.Texto}>
                Ocorre que a penalidade aplicada sequer tem razão de existir, visto que:
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

            <Text>
                ________________, ______ de _______ de ______
            </Text>

            <Text>
                ________________________________
            </Text>

            <Text>(Nome completo)</Text>
        </Page>
    </Document>
);

function PdfPeticao() {
    return (
        <>
            <PDF />

            <PDFDownloadLink document={<PDF />} fileName="Peticao.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Gerando PDF...' : 'Baixar PDF'
                }
            </PDFDownloadLink>
        </>
    );
}

export default PdfPeticao;