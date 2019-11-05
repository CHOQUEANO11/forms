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
        marginTop: -55,
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
    subTitle: {
        textAlign: 'center',
        marginTop: 2,
        fontSize: 11,
        marginRight: 50
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
        marginRight: 35,
        fontWeight: 'bold',
        fontSize: 11,
        lineHeight: 1.6
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
                        <Text>COMISSÃO DE PROMOÇÕES DE OFICIAIS</Text>
                        <Text>{props.unidade}</Text>
                    </View>
                    <View style={styles.imgEstado} >
                        <Image src={BrasaoEstado} />
                    </View>
                    <View style={styles.title}>
                        <Text>FICHA DE AVALIAÇÃO PROFISSIONAL DE OFICIAIS</Text>
                        <Text>CONCEITO DO OFICIAL AVALIADOR</Text>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.titleForm}> NOME: </Text>
                        <Text style={styles.titleForm}>POSTO/QUADRO: </Text>
                        <Text style={styles.titleForm}>PERÍODO:  {props.referencia}</Text>
                        <Text style={styles.titleForm}>OPM: </Text>
                        <Text style={styles.titleForm}>FUNÇÕES EXERCIDAS NA CORPORAÇÃO E/OU EM OUTROS ORGÃOS: </Text>
                        <Text style={styles.title}>HABILIDADES, COMPETÊNCIAS E VALORES </Text>
                        <Text style={styles.title}>1 - CAPACIDADE DE TRABALHO </Text>
                        <Text style={styles.titleForm}>(Capacidade de atingir os resultados com o emprego dos recursos 
                        disponíveis).</Text>
                        <Text style={styles.titleForm}>1.1 - Demonstra cumprir suas tarefas com dedicação e 
                        perseverança:</Text>
                        <Text style={styles.titleForm}>1.2 - Demonstra empenhar-se por concluí-las nos prazos 
                        estabelecidos: </Text>
                        <Text style={styles.titleForm}>1.3 - Demonstra determinação e entusiasmo e mantém-se produtivo 
                        mesmo em situação de ações complexas: </Text>
                        <Text style={styles.titleForm}>1.4 - Demonstra capacidade de atingir resultadospráticos, com o 
                        emprego dos recursosdisponíveisn no exercício de suas atribuições: </Text>
                        <Text style={styles.titleForm}>1.5 - Demonstra contribuir para o alcance dos objetivos de sua 
                        área de atuação: </Text>
                        <Text style={styles.titleForm}>1.6 - Demonstra-se solicito para com o exercício de tarefas 
                        necessárias ao melhor cumprimento da missão do orgão onde está lotado: </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO:</Text>
                        <Text style={styles.title}>2 - LIDERANÇA </Text>
                        <Text style={styles.titleForm}>(Capacidade de comandar, coordenar, gerenciar e desenvolver trabalhos 
                        em equipe, demonstrada pela influência que suas ações e palavras exercem sobre as pessoas). </Text>
                        <Text style={styles.titleForm}>2.1 - Demonstra ter iniciativa, identificando oportunidades, agindo 
                        proativamente:  </Text>
                        <Text style={styles.titleForm}>2.2 - Demonstra atuar com serenidade e equilíbrio diantede situações 
                        adversas: </Text>
                        <Text style={styles.titleForm}>2.3 - Demonstra comprometimento no atendimento das necessidades de seus 
                        comandados: </Text>
                        <Text style={styles.titleForm}>2.4 - Demonstra ser respeitado e admirado por seus parese subordinados: </Text>
                        <Text style={styles.titleForm}>2.5 - Demonstra ser diligente na avaliação das qualidades e limitações 
                        de seus subordinados encorajando o desenvolvimento e o amadurecimento destes: </Text>
                        <Text style={styles.titleForm}>2.6 - Demonstra capacidade de coordenar e comandar equipes, compartilhando 
                        os sucessos e recompensas adquiridos do trabalho coletivo, sem se eximir de assumir suas responsabilidades: </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO: </Text>
                        <Text style={styles.title}>3 - DECISÃO </Text>
                        <Text style={styles.titleForm}>(Capacidade de analisar fatos, situações e escolher com discernimento a alternativa 
                        de solução mais adequada nas diversas situações de trabalho sob sua responsabilidade). </Text>
                        <Text style={styles.titleForm}>3.1 - Demonstra, no processo decisório, optar pela ação mais adequada aos 
                        interesses da Administração Pública:  </Text>
                        <Text style={styles.titleForm}>3.2 - Demonstra capacidade de analisar riscos, que possam resultar da decisão a ser tomada, 
                         buscando minimizá-los, durante a ação desencadeada: </Text>
                        <Text style={styles.titleForm}>3.3 - Demonstra capacidade de decidir com agilidade, observando os parâmetros da legalidade 
                        e do bem comum: </Text>
                        <Text style={styles.titleForm}>3.4 - Demonstra criatividade no enfrentamento dos desafios e diante de situações imprevistas e 
                        inesperadas, reajusta seus procedimentos de forma a reduzir a incidência de riscos ao comprometimento dos objetivos estabelecidos: </Text>
                        <Text style={styles.titleForm}>3.5 - Demonstra ser oportuno na tomada de decisão, evitando prejuízos à Administração: </Text>
                        <Text style={styles.titleForm}>3.6 - Demonstra priorizar a tomada de decisão compartilhada:  </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO:  </Text>
                        <Text style={styles.title}>4 - CAPACIDADE DE JULGAR E PROMOVER A JUSTIÇA  </Text>
                        <Text style={styles.titleForm}>(Capacidade de promover o bem estar da equipe e/ou pessoas, regulada por uma concepção comum de 
                        justiça, de forma estável e sem influências indevidas).  </Text>
                        <Text style={styles.titleForm}>4.1 - Demonstra considerável senso de justiça na apreciação de atos e méritos dos subordinados: </Text>
                        <Text style={styles.titleForm}>4.2 - Demonstra capacidade de julgar os iguais com impessoalidade e isonomia:  </Text>
                        <Text style={styles.titleForm}>4.3 - Demonstra preucupação com a prática de bons exemplos, visando convencer o subordinado ao 
                        exercício da justiça: </Text>
                        <Text style={styles.titleForm}>4.4 - Demonstra capacidade de fundamentar seu julgamento com coerência, baseando-se em critérios 
                        científicos e de legalidade:  </Text>
                        <Text style={styles.titleForm}>4.5 - Demonstra ser diligente pela prática do que é correto e impessoal, visando favorecer a 
                        construção de uma instituição justa: </Text>
                        <Text style={styles.titleForm}>4.6 - Demonstra, espontaneamente, a capacidade de reconhecer e/ou reparar seus próprios erros:  </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO: </Text>
                        <Text style={styles.title}>5 - CAPACIDADE DE DIREÇÃO E CONTROLE</Text>
                        <Text style={styles.titleForm}>(Capacidade de conduzir processos gerenciais e administrativosde forma a atingir os resultados desejados, 
                        por meio das pessoas).</Text>
                        <Text style={styles.titleForm}>5.1 - Demonstra capacidade de planejar ações, definindo objetivos e estabelecendo metas claras e 
                        exequíveis</Text>
                        <Text style={styles.titleForm}>5.2 - Demonstra capacidade de definir procedimentos e as condições que envolvem a execução das 
                        tarefas a serem cumpridas:</Text>
                        <Text style={styles.titleForm}>5.3 - Demonstra empregar as pessoas e os recusos disponíveis, sejam ele, logísticos ou financeiros, 
                        alocando-os da melhor forma e de acordo com o planejamento estabelecido:</Text>
                        <Text style={styles.titleForm}>5.4 - Demonstra atribuir missões compatíveis com a habilitação do subordinado: </Text>
                        <Text style={styles.titleForm}>5.5 - Demonstra coordenar o desenvolvimento dos trabalhos intervindo quando necessário: </Text>
                        <Text style={styles.titleForm}>5.6 - Demonstra avaliar se os resultados ancançados coincidem com os objetivos e metas estabelecidos:   </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO:  </Text>
                        <Text style={styles.title}>6 - ATITUDE POLICIAL MILITAR </Text>
                        <Text style={styles.titleForm}>(Comprometimento do oficial com os valores, deveres e princípios da ética institucional, em especial 
                        a lealdade, a probidade, a verdade, a responsabilidade e o sentimento do dever, com vistas à consecução 
                        da disciplina policial militar).</Text>
                        <Text style={styles.titleForm}>6.1 - Demonstra praticar a verdade, a lealdade, a probidade e a responsabilidade 
                        como fundamentos da dignidade pessoal:  </Text>
                        <Text style={styles.titleForm}>6.2 - Demonstra ser franco e expõe com propriedade suas opniões, mesmo que contrárias ao desejo ou a visão do grupo 
                        ou do chefe, resguardando os princípios da disciplina e da boa educação:  </Text>
                        <Text style={styles.titleForm}>6.3 - Demonstra assumir a responsabilidade por suas ações e omissões:  </Text>
                        <Text style={styles.titleForm}>6.4 - Demonstra exercer sua autoridade, respeitando os direitos dos seus subordinados e exigindo o cumprimentode seus 
                        deveres institucionais:  </Text>
                        <Text style={styles.titleForm}>6.5 - Demonstra proceder conforme as normas que regem a PMPA, preservando valores institucionais, exercitando a 
                        visão crítica e a criatividade:  </Text>
                        <Text style={styles.titleForm}>6.6 - Demonstra dedicação ao cumprimento do dever, empenhando-se pela qualidade de suas ações:  </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO:  </Text>
                        <Text style={styles.title}>7 - CONFIABILIDADE PROFISSIONAL </Text>
                        <Text style={styles.titleForm}>(Grau de confiança que desperta, em razão do seu desempenho funcional e postura militar, refletindo 
                        o grau de credibilidade do profissional militar).</Text>
                        <Text style={styles.titleForm}>7.1 - Demonstra que a missão que lhe for atribuída sera bem cumprida, sem a necessidade de supervisão ou 
                        fiscalização:  </Text>
                        <Text style={styles.titleForm}>7.2 - Demonstra praticar ações alinhadas aos objetivos institucionais:  </Text>
                        <Text style={styles.titleForm}>7.3 - Demonstra ser respeitado em razão de sua inteligência, conhecimentos, experiência e postura profissional:  </Text>
                        <Text style={styles.titleForm}>7.4 - Demostra ser pró-ativo na solução de problemas, antecipando-se a eles, respondendo com presteza, 
                        agilidade e prontidão:  </Text>
                        <Text style={styles.titleForm}>7.5 - Demonstra ser discreto em suas atitudes e no trato de assunto que, por sua natureza, 
                        devam ter difusão restrita a um ambiente limitado:  </Text>
                        <Text style={styles.titleForm}>7.6 - Demonstra confiabilidade em razão da maneira pela qual assessora seus superiores e orienta seus pares e 
                        subordinados:  </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO:  </Text>
                        <Text style={styles.title}>8 - CONHECIMENTO E HABILIDADE TÉCNICO-PROFISSIONAL </Text>
                        <Text style={styles.titleForm}>(Potencial técnico-profissional e capacidade de buscar novos conhecimentos, mantendo-se em constante preparação 
                        intelectual, refletido no desempenho profissional).</Text>
                        <Text style={styles.titleForm}>8.1 - Demonstra possuir conhecimentos necessários ao exercício de suas atribuições funcionais:  </Text>
                        <Text style={styles.titleForm}>8.2 - Demonstra capacidade de aplicar seus conhecimentos teóricos e experiências no desenvolvimento de casos concretos 
                        relacionados as suas atividades funcionais:  </Text>
                        <Text style={styles.titleForm}>8.3 - Demonstra se empenhar na ampliação e atualização de seus conhecimentos, visando o auto-aperfeiçoamento profissional:  </Text>
                        <Text style={styles.titleForm}>8.4 - Demostra aprender com facilidade novas técnicas, compreende os novo conceitos e procedimentos 
                        relacionados à sua atividade funcional:  </Text>
                        <Text style={styles.titleForm}>8.5 - Demonstra capacidade de comunicação oral e escrita, que possibilite a transmissão das ideias de forma clara, 
                        concisa e precisa, em observância às normas da linguagem culta, ajustada e acessível ao público alvo:  </Text>
                        <Text style={styles.titleForm}>8.6 - Demonstra a capacidade de apresentatr ideias inovadoras e pertinentes para o aumentoda eficiência das tarefas 
                        executadas:  </Text>
                        <Text style={styles.titleForm}>TOTAL NO ITEM AVALIADO:  </Text>
                        <Text style={styles.titleForm}>CAMPO DESTINADO A JUSTIFICATIVA DE NOTA INFERIOR A 3,0 (TRÊS) OU SUPERIOR A 5,50 (CINCO E CINQUENTA).  </Text>
                        <Text style={styles.titleForm}>...</Text>


                        <View style={styles.locale}>
                            <Text>Quartel de Belém, em {moment(props.data).format('D [de] MMMM [de] YYYY')}</Text>
                        </View>

                        <View style={styles.assin}>
                            <Text>______________________________________________</Text>
                            <Text>Candidato</Text>
                        </View>

                        <View style={styles.assin}>
                            <Text>______________________________________________</Text>
                            <Text>SECRETÁRIO CPO</Text>
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
                        
