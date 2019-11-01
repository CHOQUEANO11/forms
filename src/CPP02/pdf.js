import React from 'react'
import { Page, Text, View, Document, Image, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import BrasaoPM from '../assets/img/pmpa.png'
import BrasaoEstado from '../assets/img/para.png'
import moment from 'moment';
import 'moment/locale/pt-br'

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    body: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 20,
        marginBottom: 30
    },
    imgPM: {
        marginTop: 0,
        alignItems: 'flex-end',
        marginLeft: 510,
        width: 50,
        height: 50
    },
    imgQr: {
        width: 50,
        height: 50,
    },
    containerQrcode: {
        marginTop: 30,
        flexDirection: 'row'
    },
    imgEstado: {
        marginTop: -43,
        width: 50,
        height: 50,
        marginLeft: 30
    },
    textHeader: {
        textAlign: 'center',
        marginTop: -50,
        fontSize: 13
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 11,
    },
    assin: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 11,
    },
    locale: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 11,
    },
    textSpace: {
        marginTop: 10,
    },
    form: {
        marginTop: 10,
        fontSize: 10,
        textAlign: 'left',
        marginLeft: 40,
        marginRight: 0
    },
    inputWith: {
        marginLeft: 30,
        marginTop: 4
    },
    inputs: {
        marginTop: 4,
        marginRight: 50
    },
    titleForm: {
        marginTop: 10,
        marginBottom: 6,
        textAlign: 'left',
        marginLeft: 0,
        marginRight: 40,
        fontWeight: 'bold',
        fontSize: 11
    },
    tableOrd: {
        fontWeight: 'bold',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 10,
        width: 100,
        height: 25,
        marginTop: 5,
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    tableJor: {
        fontWeight: 'bold',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 10,
        width: 160,
        height: 25,
        marginTop: 5,
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    tableItens: {
        fontWeight: 'bold',
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 10,
        marginTop: 0,
        flexDirection: 'column',
        justifyContent:'space-between'
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'right',
        color: 'grey',
        marginRight: 30
      },
});

const MyDocument = (props) => {
    let oi = props.img
    return (
        <PDFViewer style={{width:"100%", margin:"0 auto", height: 640}}>
        <Document>
            <Page size="A4" style={styles.Page} >
                <View style={styles.body}>
                    <View style={styles.imgPM}>
                        <Image src={BrasaoPM} />
                    </View>
                    <View style={styles.textHeader}>
                        <Text>GOVERNO DO ESTADO DO PARÁ</Text>
                        <Text>SECRETARIA DE SEGURANÇA PÚBLICA E DEFESA SOCIAL</Text>
                        <Text>POLÍCIA MILITAR DO PARÁ</Text>
                        <Text>{props.unidade}</Text>
                    </View>
                    <View style={styles.imgEstado} >
                        <Image src={BrasaoEstado} />
                    </View>
                    <View style={styles.title}>
                        <Text>FICHA DE AVALIAÇÃO DE DESEMPENHO PROFISSIONAL DO PRAÇA</Text>
                    </View>
                    <View style={styles.form} >
                        <Text style={styles.titleForm}> NOME: </Text>
                        <Text style={styles.titleForm}>GRADUAÇÃO: </Text>
                        <Text style={styles.titleForm}>QUADRO:  {props.referencia}</Text>
                        <Text style={styles.titleForm}>REFERENTE AO PERIODO: </Text>
                        <Text style={styles.titleForm}>I - CARGOS DESEMPENHADOS (No período): </Text>
                        <Text style={styles.titleForm}>II - QUALIDADES PESSOAIS E FUNCIONAIS </Text>
                        <Text style={styles.title}>A - CARÁTER (Manifestação atinentes às Personalidades) </Text>
                        <Text style={styles.titleForm}>01 - Lealdade e Amor a Verdade: </Text>
                        <Text style={styles.titleForm}>02 - Noções de Responsabilidade: </Text>
                        <Text style={styles.titleForm}>03 - Comportamento em Face de Situação:  </Text>
                        <Text style={styles.titleForm}>04 - Energia e Perseverança </Text>
                        <Text style={styles.title}>B - INTELIGÊNCIA  </Text>
                        <Text style={styles.titleForm}>05 - Capacidade de Raciocínio e Decisão: </Text>
                        <Text style={styles.titleForm}>06 - Facilidade de expressão (escrita/oral):  </Text>
                        <Text style={styles.title}>C - ESPÍRITO E CONDUTA MILITAR  </Text>
                        <Text style={styles.titleForm}>07 - Cumprimento do dever:  </Text>
                        <Text style={styles.titleForm}>08 - Espírito de Disciplina:  </Text>
                        <Text style={styles.titleForm}>09 - Correção de Atitude:  </Text>
                        <Text style={styles.titleForm}>10 - Assiduidade e Pontualidade:  </Text>
                        <Text style={styles.titleForm}>11 - Espirito de Camaradagem e Relações Humanas: </Text>
                        <Text style={styles.titleForm}>12 - Conduta Civil:  </Text>
                        <Text style={styles.titleForm}>13 - Capacidade de Liderança: </Text>
                        <Text style={styles.titleForm}>14 - Capacidade de Planejamento:  </Text>
                        <Text style={styles.titleForm}>15 - Probidade e Zelo: </Text>
                        <Text style={styles.titleForm}>16 - Capacidade de Organização e Eficiência:  </Text>
                        <Text style={styles.title}>D - CAPACIDADE FÍSICA  </Text>
                        <Text style={styles.titleForm}>17 - Resistência à Fadiga: </Text>
                        <Text style={styles.titleForm}>18 - Disposição para o Trabalho: </Text>
                        <Text style={styles.titleForm}>III - CONCEITO FINAL  </Text>
                        <Text style={styles.titleForm}>TOTAL (Quantidade de vezes que foi assinalado o conceito):  </Text>
                        <Text style={styles.titleForm}>RESULTADO FINAL (Somatório dos resultados parciais dividido
                        pelos itens avaliados):   </Text>

                        <View style={styles.locale}>
                            <Text>Quartel de Belém, em {moment(props.data).format('D [de] MMMM [de] YYYY')}</Text>
                        </View>

                        <View style={styles.assin}>
                            <Text>_______________________________________</Text>
                            <Text>CMT</Text>
                        </View>

                        <View style={styles.containerQrcode}>
                            <Image style={styles.imgQr} src={`${oi}`} />
                            <View style={{flexDirection: 'column', marginLeft: 5, marginTop: 2 }}>
                                <Text>Documento Gerado Eletronicamente pelo Sistema de Jornadas.</Text>
                                <Text>Assinado por CB EVERTON OLIVEIRA DA SILVA com Hash: e1unr2ubrr4r4r42r4.</Text>
                                <Text>Para consultar a integridade do documento https://sigpol.pm.pa.gov.br/autentica.</Text>
                                <Text>Ou escanear via qualquer aplicativo de leitura de QrCode. </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                            `${pageNumber} / ${totalPages}`
                )} fixed />
            </Page>
        </Document>
        </PDFViewer>
    )
};

export default MyDocument;
                        
