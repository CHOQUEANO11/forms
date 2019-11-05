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
                        <Text>FICHA DE AVALIAÇÃO DE POTENCIAL E EXPERIÊNCIA PROFISSIONAL</Text>
                    </View>
                    <View style={styles.form} >
                        <Text style={styles.titleForm}> NOME: </Text>
                        <Text style={styles.titleForm}>GRADUAÇÃO: </Text>
                        <Text style={styles.titleForm}>QUALIFICAÇÃO:  {props.referencia}</Text>
                        <Text style={styles.titleForm}>PERÍODO NA GRADUAÇÃO: </Text>
                        <Text style={styles.title}>PONTUAÇÕES POSITIVAS </Text>
                        <Text style={styles.title}>1 - EXPERIÊNCIA PROFISSIONAL NA GRADUAÇÃO ATUAL </Text>
                        <Text style={styles.titleForm}>1.1 - Tempo exercendo função prevista em  orgão 
                        integrante da PMPA (por ano):</Text>
                        <Text style={styles.titleForm}>1.2 - Tempo exercendo função fora da PMPA, mas 
                        de natureza policial-militar (por ano): </Text>
                        <Text style={styles.title}>2 - ATIVIDADES ACADÊMICAS E DE PESQUISAS INSTITUCIONAIS 
                        NA GRADUAÇÃO ATUAL </Text>
                        <Text style={styles.titleForm}>2.1 - Obras literáriase manuais profissionais homologados 
                        e editados ou artigos cientificos publicados, afeto à Defesa Social:  </Text>
                        <Text style={styles.titleForm}>2.2 - Habilitação para o exercício da docência e/ou 
                        policial-militar 30h/a </Text>
                        <Text style={styles.title}>3 - QUALIFICAÇÃO PROFISSIONAL AO LONGO DA CARREIRA  </Text>
                        <Text style={styles.titleForm}>3.1 - Curso de Carreira (requisito para a promoção).  </Text>
                        <Text style={styles.titleForm}>3.1.1 - CAS: </Text>
                        <Text style={styles.titleForm}>3.1.2 - CFP:  </Text>
                        <Text style={styles.titleForm}>3.2 - Titulações Acadêmicas (não obrigatório à carreira).  </Text>
                        <Text style={styles.titleForm}>3.2.1 - Pós-Doutorado:  </Text>
                        <Text style={styles.titleForm}>3.2.2 - Doutorado:  </Text>
                        <Text style={styles.titleForm}>3.2.3 - Pós-Graduação:  </Text>
                        <Text style={styles.title}>4 - MEDALHAS E CONDECORAÇÕES  </Text>
                        <Text style={styles.titleForm}>4.1 - Ordem do Mérito Grão Pará: </Text>
                        <Text style={styles.titleForm}>4.2 - Barros e Arouck:  </Text>
                        <Text style={styles.titleForm}>4.3 - Ordem do Mérito Cel. Fontoura: </Text>
                        <Text style={styles.titleForm}>4.4 - Mérito Tiradentes:  </Text>
                        <Text style={styles.titleForm}>4.5 - Sotero de Menezes: </Text>
                        <Text style={styles.titleForm}>4.6 - Gen. Ferreira Coelho:  </Text>
                        <Text style={styles.titleForm}>4.7 - Láurea do Mérito Pessoal:  </Text>
                        <Text style={styles.titleForm}>4.8 - Tempo de Serviço</Text>
                        <Text style={styles.titleForm}>4.8.1 - 10 Anos:  </Text>
                        <Text style={styles.titleForm}>4.8.2 - 20 Anos:  </Text>
                        <Text style={styles.titleForm}>TOTAL DE PONTOS POSITIVOS: </Text>
                        <Text style={styles.title}>PONTUAÇÕES NEGATIVAS</Text>
                        <Text style={styles.title}>5 - PUNIÇÕES DISCIPLINARES AO LONGO DA CARREIRA</Text>
                        <Text style={styles.titleForm}>5.1 - De Natureza Leve (Repreensão de Até 10 dias de detenção):</Text>
                        <Text style={styles.titleForm}>5.2 - De Natureza Média (11 dias de Detenção Até 10 dias de Prisão):</Text>
                        <Text style={styles.titleForm}>5.3 - De Natureza grave (11 à 30 dias de Prisão):</Text>
                        <Text style={styles.title}>6 - CONDENAÇÃO PENAL  </Text>
                        <Text style={styles.titleForm}>6.1 - Condenação Penal Até 2 Anos, com Sentença Transitada em Julgado: </Text>
                        <Text style={styles.titleForm}>TOTAL DE PONTOS NEGATIVOS: </Text>
                        <Text style={styles.titleForm}>TOTAL DE PONTOS GERAL:   </Text>

                        <View style={styles.locale}>
                            <Text>Quartel de Belém, em {moment(props.data).format('D [de] MMMM [de] YYYY')}</Text>
                        </View>

                        <View style={styles.assin}>
                            <Text>______________________________________________</Text>
                            <Text>Candidato</Text>
                        </View>

                        <View style={styles.assin}>
                            <Text>______________________________________________</Text>
                            <Text>SECRETÁRIO CPP</Text>
                            <Text>(Transc. Diário Ofical Nº 32.931, de 20/07/2015)</Text>
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
                        
