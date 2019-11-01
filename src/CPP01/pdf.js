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
        marginTop: 20,
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
                        <Text>FICHA DE INFORMAÇÃO FUNCIONAL</Text>
                    </View>
                    <View style={styles.form} >
                        <Text style={styles.titleForm}>1. NOME: </Text>
                        <Text style={styles.titleForm}>2. DATA DE INCLUSÃO: </Text>
                        <Text style={styles.titleForm}>3. MEDALHAS E CONDECORAÇÕES:  {props.referencia}</Text>
                        <Text style={styles.titleForm}>4. ELOGIOS: </Text>
                        <Text style={styles.inputs}>5. PUNIÇÕES DISCIPLINARES: </Text>
                        <Text style={styles.titleForm}>5.1 -  Prisão: </Text>
                        <Text style={styles.titleForm}>5.2 -  Detenção: </Text>
                        <Text style={styles.titleForm}>5.3 -  Repreensão: </Text>
                        <Text style={styles.titleForm}>6. COMPORTAMENTO: </Text>
                        <Text style={styles.titleForm}>7. FOI CONDENADO EM PROCESSO DE PRIMEIRA INSTÂNCIA 
                        ATÉ A DECISÃO OU TRIBUNAL SUPERIOR:  </Text>
                        <Text style={styles.titleForm}>8. ESTÁ PRESO PREVENTIVAMENTE OU EM FLAGRANTE DELITO: </Text>
                        <Text style={styles.titleForm}>9. ESTÁ RESPONDENDO CONSELHO DE DISCIPLINA:  </Text>
                        <Text style={styles.titleForm}>10. ESTÁ DE LTSP NA JRS, (SE SIM), QUANTO TEMPO: </Text>
                        <Text style={styles.titleForm}>11. ESTÁ AGUARDANDO RESERVA OU ESTÁ DESOBRIGADO DAS 
                        FUNÇÕES DE ACORDO COM A CONSTITUIÇÃO:  </Text>
                        <Text style={styles.titleForm}>12. ESTÁ NO EXERCÍCIO DA FUNÇÃO DE ACORDO COM O QUADRO:  </Text>
                        <Text style={styles.titleForm}>13. ESTÁ A DISPOSIÇÃO DE OUTRO ÓRGÃO:  </Text>
                        <Text style={styles.titleForm}>14. ESTÁ AGREGADO, (SE SIM), POR QUAL MOTIVO:  </Text>

                        <View style={styles.locale}>
                            <Text>Quartel de Belém, em {moment(props.data).format('D [de] MMMM [de] YYYY')}</Text>
                        </View>

                        <View style={styles.assin}>
                            <Text>ALESSANDRO ALBERTO DE SOUZA DIAS - TEN CEL PM</Text>
                            <Text>Subdiretor de Pessoal da PMPA</Text>
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
                        
