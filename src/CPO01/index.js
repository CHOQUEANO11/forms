import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
//import { toast } from 'react-toastify';

import { Container, Form
    //Loading 
} from './styles';
import { wrap } from 'module';
//import { apiInternal } from '../../services/api';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 5
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }  
}));

export default function FormCPP02({ person, showForm }) {
  const [open, setOpen] = useState(false);
  //const [idpessoa, setIdpessoa] = useState('');
  const [periodo, setPeriodo] = useState('');
  //const [loading, setLoading] = useState(false);
  const [status, //setStatus
] = useState(false);

const [values, setValues] = React.useState({
  age: '',
  multiline: '',
});

const handleChange = name => event => {
  setValues({ ...values, [name]: event.target.value });
};

  const check = {
    checkedE: false,
    checkedMB: false,
    checkedB: false,
    checkedR: false,
    checkedI: false,
    checkedNO: false
  };

  const [lav, setLav] = useState(check);
  const [valueLav, setValueLav] = useState({ peso: 0, click: 0 });

  const [nr, setNr] = useState(check);
  const [valueNr, setValueNr] = useState({ peso: 0, click: 0 });

  const [cfs, setCfs] = useState(check);
  const [valueCfs, setValueCfs] = useState({ peso: 0, click: 0 });

  const [ep, setEp] = useState(check);
  const [valueEp, setValueEp] = useState({ peso: 0, click: 0 });

  const [crd, setCrd] = useState(check);
  const [valueCrd, setValueCrd] = useState({ peso: 0, click: 0 });

  const [fe, setFe] = useState(check);
  const [valueFe, setValueFe] = useState({ peso: 0, click: 0 });

  const [cd, setCd] = useState(check);
  const [valueCd, setValueCd] = useState({ peso: 0, click: 0 });

  const [ed, setEd] = useState(check);
  const [valueEd, setValueEd] = useState({ peso: 0, click: 0 });

  const [ca, setCa] = useState(check);
  const [valueCa, setValueCa] = useState({ peso: 0, click: 0 });

  const [ap, setAp] = useState(check);
  const [valueAp, setValueAp] = useState({ peso: 0, click: 0 });

  const [ecrh, setEcrh] = useState(check);
  const [valueEcrh, setValueEcrh] = useState({ peso: 0, click: 0 });

  const [cc, setCc] = useState(check);
  const [valueCc, setValueCc] = useState({ peso: 0, click: 0 });

  const [cl, setCl] = useState(check);
  const [valueCl, setValueCl] = useState({ peso: 0, click: 0 });

  const [cp, setCp] = useState(check);
  const [valueCp, setValueCp] = useState({ peso: 0, click: 0 });

  const [pz, setPz] = useState(check);
  const [valuePz, setValuePz] = useState({ peso: 0, click: 0 });

  const [coe, setCoe] = useState(check);
  const [valueCoe, setValueCoe] = useState({ peso: 0, click: 0 });

  const [rf, setRf] = useState(check);
  const [valueRf, setValueRf] = useState({ peso: 0, click: 0 });

  const [dt, setDt] = useState(check);
  const [valueDt, setValueDt] = useState({ peso: 0, click: 0 });

  const [d1, setD1] = useState(check);
  const [valueD1, setValueD1] = useState({ peso: 0, click: 0 });

  const [d2, setD2] = useState(check);
  const [valueD2, setValueD2] = useState({ peso: 0, click: 0 });

  const [d3, setD3] = useState(check);
  const [valueD3, setValueD3] = useState({ peso: 0, click: 0 });

  const [d4, setD4] = useState(check);
  const [valueD4, setValueD4] = useState({ peso: 0, click: 0 });

  const [d5, setD5] = useState(check);
  const [valueD5, setValueD5] = useState({ peso: 0, click: 0 });

  const [d6, setD6] = useState(check);
  const [valueD6, setValueD6] = useState({ peso: 0, click: 0 });

  const [d7, setD7] = useState(check);
  const [valueD7, setValueD7] = useState({ peso: 0, click: 0 });

  const [d8, setD8] = useState(check);
  const [valueD8, setValueD8] = useState({ peso: 0, click: 0 });

  const [d9, setD9] = useState(check);
  const [valueD9, setValueD9] = useState({ peso: 0, click: 0 });

  const [d10, setD10] = useState(check);
  const [valueD10, setValueD10] = useState({ peso: 0, click: 0 });

  const [d11, setD11] = useState(check);
  const [valueD11, setValueD11] = useState({ peso: 0, click: 0 });

  const [d12, setD12] = useState(check);
  const [valueD12, setValueD12] = useState({ peso: 0, click: 0 });

  const [d13, setD13] = useState(check);
  const [valueD13, setValueD13] = useState({ peso: 0, click: 0 });

  const [d14, setD14] = useState(check);
  const [valueD14, setValueD14] = useState({ peso: 0, click: 0 });

  const [d15, setD15] = useState(check);
  const [valueD15, setValueD15] = useState({ peso: 0, click: 0 });

  const [d16, setD16] = useState(check);
  const [valueD16, setValueD16] = useState({ peso: 0, click: 0 });

  const [d17, setD17] = useState(check);
  const [valueD17, setValueD17] = useState({ peso: 0, click: 0 });

  const [d18, setD18] = useState(check);
  const [valueD18, setValueD18] = useState({ peso: 0, click: 0 });

  const [d19, setD19] = useState(check);
  const [valueD19, setValueD19] = useState({ peso: 0, click: 0 });

  const [d20, setD20] = useState(check);
  const [valueD20, setValueD20] = useState({ peso: 0, click: 0 });

  const [d21, setD21] = useState(check);
  const [valueD21, setValueD21] = useState({ peso: 0, click: 0 });

  const [d22, setD22] = useState(check);
  const [valueD22, setValueD22] = useState({ peso: 0, click: 0 });

  const [d23, setD23] = useState(check);
  const [valueD23, setValueD23] = useState({ peso: 0, click: 0 });

  const [d24, setD24] = useState(check);
  const [valueD24, setValueD24] = useState({ peso: 0, click: 0 });

  const [d25, setD25] = useState(check);
  const [valueD25, setValueD25] = useState({ peso: 0, click: 0 });

  const [d26, setD26] = useState(check);
  const [valueD26, setValueD26] = useState({ peso: 0, click: 0 });

  const [d27, setD27] = useState(check);
  const [valueD27, setValueD27] = useState({ peso: 0, click: 0 });

  const [d28, setD28] = useState(check);
  const [valueD28, setValueD28] = useState({ peso: 0, click: 0 });

  const [d29, setD29] = useState(check);
  const [valueD29, setValueD29] = useState({ peso: 0, click: 0 });

  const [d30, setD30] = useState(check);
  const [valueD30, setValueD30] = useState({ peso: 0, click: 0 });

  const classes = useStyles();

  useEffect(() => {
    //setLoading(true);
    /*async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setIdpessoa(info.idpessoa);
    }*/

    /*async function handleGetForm() {
      const response = await apiInternal.get(`formcpp02/${person.idpessoa}`);

      if (response.data !== null) {
        setLav(JSON.parse(response.data.lav));
        setValueLav(JSON.parse(response.data.valuelav));
        setNr(JSON.parse(response.data.nr));
        setValueNr(JSON.parse(response.data.valuenr));
        setCfs(JSON.parse(response.data.cfs));
        setValueCfs(JSON.parse(response.data.valuecfs));
        setEp(JSON.parse(response.data.ep));
        setValueEp(JSON.parse(response.data.valueep));
        setCrd(JSON.parse(response.data.crd));
        setValueCrd(JSON.parse(response.data.valuecrd));
        setFe(JSON.parse(response.data.fe));
        setValueFe(JSON.parse(response.data.valuefe));
        setCd(JSON.parse(response.data.cd));
        setValueCd(JSON.parse(response.data.valuecd));
        setEd(JSON.parse(response.data.ed));
        setValueEd(JSON.parse(response.data.valueed));
        setCa(JSON.parse(response.data.ca));
        setValueCa(JSON.parse(response.data.valueca));
        setAp(JSON.parse(response.data.ap));
        setValueAp(JSON.parse(response.data.valueap));
        setEcrh(JSON.parse(response.data.ecrh));
        setValueEcrh(JSON.parse(response.data.valueecrh));
        setCc(JSON.parse(response.data.cc));
        setValueCc(JSON.parse(response.data.valuecc));
        setCl(JSON.parse(response.data.cl));
        setValueCl(JSON.parse(response.data.valuecl));
        setCp(JSON.parse(response.data.cp));
        setValueCp(JSON.parse(response.data.valuecp));
        setPz(JSON.parse(response.data.pz));
        setValuePz(JSON.parse(response.data.valuepz));
        setCoe(JSON.parse(response.data.coe));
        setValueCoe(JSON.parse(response.data.valuecoe));
        setRf(JSON.parse(response.data.rf));
        setValueRf(JSON.parse(response.data.valuerf));
        setDt(JSON.parse(response.data.dt));
        setValueDt(JSON.parse(response.data.valuedt));
        setStatus(response.data.status);
        setLoading(false);
      }
      setLoading(false);
    }*/
    const date = new Date();
    const ano = date.getFullYear();
    const dateInitial = new Date(ano, 9, 25);

    if (dateInitial > date) {
      setPeriodo(`26/09/${ano} à 21/04/${ano}`);
    } else {
      setPeriodo(`22/04/${ano} à 25/09/${ano}`);
    }

    //handleGetForm();
    //personInformation();
  }//, [person.idpessoa]
  );

  /*async function save() {
    try {
      const response = await apiInternal.post('formcpp02', {
        idpreechedor: idpessoa,
        idpessoa: person.idpessoa,
        lav: `${JSON.stringify(lav)}`,
        valuelav: `${JSON.stringify(valueLav)}`,
        nr: `${JSON.stringify(nr)}`,
        valuenr: `${JSON.stringify(valueNr)}`,
        cfs: `${JSON.stringify(cfs)}`,
        valuecfs: `${JSON.stringify(valueCfs)}`,
        ep: `${JSON.stringify(ep)}`,
        valueep: `${JSON.stringify(valueEp)}`,
        crd: `${JSON.stringify(crd)}`,
        valuecrd: `${JSON.stringify(valueCrd)}`,
        fe: `${JSON.stringify(fe)}`,
        valuefe: `${JSON.stringify(valueFe)}`,
        cd: `${JSON.stringify(cd)}`,
        valuecd: `${JSON.stringify(valueCd)}`,
        ed: `${JSON.stringify(ed)}`,
        valueed: `${JSON.stringify(valueEd)}`,
        ca: `${JSON.stringify(ca)}`,
        valueca: `${JSON.stringify(valueCa)}`,
        ap: `${JSON.stringify(ap)}`,
        valueap: `${JSON.stringify(valueAp)}`,
        ecrh: `${JSON.stringify(ecrh)}`,
        valueecrh: `${JSON.stringify(valueEcrh)}`,
        cc: `${JSON.stringify(cc)}`,
        valuecc: `${JSON.stringify(valueCc)}`,
        cl: `${JSON.stringify(cl)}`,
        valuecl: `${JSON.stringify(valueCl)}`,
        cp: `${JSON.stringify(cp)}`,
        valuecp: `${JSON.stringify(valueCp)}`,
        pz: `${JSON.stringify(pz)}`,
        valuepz: `${JSON.stringify(valuePz)}`,
        coe: `${JSON.stringify(coe)}`,
        valuecoe: `${JSON.stringify(valueCoe)}`,
        rf: `${JSON.stringify(rf)}`,
        valuerf: `${JSON.stringify(valueRf)}`,
        dt: `${JSON.stringify(dt)}`,
        valuedt: `${JSON.stringify(valueDt)}`,
        status: true
      });
      if (response) {
        setStatus(true);
        toast.success(
          `Formulário de informação funcional inserido com sucesso!`
        );
      }
    } catch (err) {
      console.log(err);
      toast.error('O Militar já possui um formulário cadastrado');
    }
  }*/

  return (
    <Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
          
         
        
         
      </Modal>
      <h3 style={{ textAlign: 'center' }}>
        FORMULÁRIO AVALIÁTIVO DE DESEMPENHO PROFISSIONAL DE OFICIAIS{' '}
        {status && <strong>Finalizado</strong>}
      </h3>
      <h3 style={{ textAlign: 'center' }}>CONCEITO DO OFICIAL AVALIADOR</h3>
      <div
        style={{
          textAlign: 'right',
          marginRight: 140,
          marginBottom: 8
        }}
      >
        <Button
          style={{ flexWrap: 'wrap' }}
          variant="outlined"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Clique para orientações sobre Preenchimento
        </Button>
      </div>
      <hr />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          <strong style={{color: 'red'}}>ATENÇÃO! Siga as instruções</strong>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              1 - A Ficha de Avaliação de Desempenho Profissional avalia 08 (oito) 
              qualidades que se espera de um Oficial nos eixos Habilidade, Competência 
              e Valores.
            </p>
            <b />
            <p>
              2 - O avaliador deverá marcar a nota correspondente à frequência 
              do comportamento observado no Oficial avaliado, conforme a 
              legenda abaixo. 
            </p>
            <b />
            <p>
              3 - A nota de cada qualidade resultará do somatório dos 06 (seis) 
              comportamentos mensurados, para os quais serão assinalados os 
              valores de [0,25], [0,50], [0,75] e [1,00].
            </p>
            <b />
            <p>
              4 - A nota final desta Ficha de Avaliação resultará da média 
              aritmética das 08 (oito) notas atribuídas para cada qualidade.
            </p>
            <b />
            <p>
              5 - O avaliador deverá atribuir mensuração de [0,25] à [1,00] a 
              todos os comportamentos constantes nesta Ficha de Avaliação, NÃO 
              cabendo a expressão "NÃO OBSERVADO".
            </p>
            <b />
            <p>
              6 - A avaliação final da Ficha de Avaliação de Desempenho Profissional, 
              resultará em uma nota numérica final que corresponderá aos seguntes 
              conceitos: 

            </p>
            <b />
            <h4>REFERENCIAL:</h4>
            <p>
              (I) - INSUFICIENTE = Nota final de [0,25] à [2,99].
            </p>
            <p>
              (R) - REGULAR = Nota final de [3,00] à [3,60].
            </p>
            <p>
              (B) - BOM = Nota final de [3,61] à [4,50].
            </p>
            <p>
              (MB) - MUITO BOM = Nota final de [4,51] à [5,50].
            </p>
            <p>
              (E) - EXCELENTE = Nota final de [5,51] à [6,00].
            </p>
            <p>
              <strong style={{color: 'red'}}>ATENÇÃO</strong>: O avaliador que atribuir nota inferior a [3,00]  
              ou superior a [5,50] deverá justificar os motivos de sua 
              avaliação.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Form>
        <div className={classes.root}>
          <Grid container spacing={1}> 
            <Grid item xs={12}>
              <Paper className={classes.paper}>Nome: {
                  //person.nome
                  }</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                POSTO: {
                    //person.Graduacao.graduacao
                    }
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>OPM: CITEL</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                FUNÇÕES EXERCIDAS NA PM OU EM OUTOS ORGÃOS:
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>PERIODO: {periodo}</Paper>
            </Grid>
          </Grid>
          <hr />
          <h3>HABILIDADES, COMPETÊNCIAS E VALORES</h3>
          <h4>1 - CAPACIDADE DE TRABALHO</h4>
          <h4>Capacidade de atingir os resultados com o emprego dos recursos disponíveis.</h4>
        </div>
        
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              1.1 - Demonstra cumprir suas tarefas com dedicação e perseverança. - Peso: {valueLav.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedE}
                      onChange={() =>
                        setLav({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedMB}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedB}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueLav({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={lav.checkedR}
                      onChange={() =>
                        setLav({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueLav({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              1.2 - Demonstra empenhar-se para concluir nos prazos estabelecidos - Peso: {valueNr.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedE}
                      onChange={() =>
                        setNr({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedMB}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedB}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueNr({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou nas maiorias das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nr.checkedR}
                      onChange={() =>
                        setNr({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueNr({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              1.3 - Demonstra determinação e entusiasmo e mantém-se 
              produtivo, mesmo em situação de ações complexas - Peso: {valueCfs.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedE}
                      onChange={() =>
                        setCfs({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedMB}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedB}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCfs({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezez [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cfs.checkedR}
                      onChange={() =>
                        setCfs({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCfs({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
                </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              1.4 - Demonstra capacidade de atingir os resultados práticos, 
              com o emprego dos recursos disponíveis, no exercício de suas 
              atribuições - Peso: {valueEp.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedE}
                      onChange={() =>
                        setEp({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedMB}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedB}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEp({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ep.checkedR}
                      onChange={() =>
                        setEp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueEp({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <hr />
        
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              1.5 - Demonstra coordenar o desenvolvimento dos trabalhos 
              intervindo quando necessário - Peso: {valueCrd.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedE}
                      onChange={() =>
                        setCrd({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedMB}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedB}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCrd({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={crd.checkedR}
                      onChange={() =>
                        setCrd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCrd({ peso: 1.0, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              1.6 - Demonstra avaliar se os resultados alcançados coincidem 
              com os objetivos e metas estabelecidos - Peso: {valueFe.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedE}
                      onChange={() =>
                        setFe({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demnosntrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedMB}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedB}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueFe({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={fe.checkedR}
                      onChange={() =>
                        setFe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueFe({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              {valueLav.peso +
                valueNr.peso +
                valueCfs.peso +
                valueEp.peso +
                valueCrd.peso +
                valueFe.peso}
            </Paper>
          </Grid>
          </Grid>  
        <hr />
        <h4>2 - LIDERANÇA</h4>
        <h4>Capacidade de comandar, coordenar, gerenciar e desenvolver trabalhos em equipe, 
            demonstrada pela influência que suas ações e palavras exercem sobre as pessoas.
        </h4>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              2.1 - Demonstra ter iniciativa, identificando oportunidades, 
              agindo proativamente - Peso: {valueCd.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedE}
                      onChange={() =>
                        setCd({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou nao demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedMB}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedB}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCd({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cd.checkedR}
                      onChange={() =>
                        setCd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCd({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              2.2 - Demonstra atuar com serenidade e equilibrio diante 
              das situações adversas - Peso: {valueEd.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedE}
                      onChange={() =>
                        setEd({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demosntrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedMB}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedB}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEd({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ed.checkedR}
                      onChange={() =>
                        setEd({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueEd({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              2.3 - Demonsstra comprometimento no atendimento das 
              necessidades de seus comandados - Peso: {valueCa.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedE}
                      onChange={() =>
                        setCa({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedMB}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedB}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCa({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ca.checkedR}
                      onChange={() =>
                        setCa({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCa({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              2.4 - Demonstra ser respeitado e admirado por seus pares e 
              subordinados - Peso: {valueAp.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedE}
                      onChange={() =>
                        setAp({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedMB}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedB}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueAp({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ap.checkedR}
                      onChange={() =>
                        setAp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueAp({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              2.5 - Demosntra ser diligente na avaliação das qualidades e 
              limitações de seus subordinados, encorajando o desenvolvimento 
              e o amadurecimento destes - Peso:{' '}
              {valueEcrh.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedE}
                      onChange={() =>
                        setEcrh({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedMB}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedB}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueEcrh({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={ecrh.checkedR}
                      onChange={() =>
                        setEcrh({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueEcrh({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              2.6 - Demonstra capacidade de coordenar e comandar equipes 
              compartilhando os sucessos e recompensas adqueridos do trabalhos 
              coletivo, sem se eximir de assumir suas responsabilidades - Peso: {valueCc.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedE}
                      onChange={() =>
                        setCc({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedMB}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedB}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCc({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cc.checkedR}
                      onChange={() =>
                        setCc({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCc({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueCd.peso +
                valueEd.peso +
                valueCa.peso +
                valueAp.peso +
                valueEcrh.peso +
                valueCc.peso }
            </Paper>
          </Grid>  
          <hr /> 
        <h4>3 - DECISÃO</h4>
        <h4>Capacidade de analisar fatos, situações e escolher com discernimento a alternativa 
            de solução mis adequada nas diversas situações de trabalho sob sua responsabilidade.
        </h4>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              3.1 -  Demonstra, no processo decisório, optar pela ação mais adequada aos 
              interesses da Administração Pública - Peso: {valueCl.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedE}
                      onChange={() =>
                        setCl({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedMB}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedB}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCl({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cl.checkedR}
                      onChange={() =>
                        setCl({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCl({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          </Grid>
          <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              3.2 -  Demonstra capacidade de analisar riscos, 
              que possam resultar da decisão a ser tomada, 
              buscando minimizá-los, durante a ação desencadeada - Peso: {valueCp.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedE}
                      onChange={() =>
                        setCp({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedMB}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedB}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCp({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={cp.checkedR}
                      onChange={() =>
                        setCp({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCp({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          </Grid>
          <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              3.3 - Demonstra capacidade de decidir com agilidade, 
              observando os parâmetros da legalidade e do bem comum. - Peso: {valuePz.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedE}
                      onChange={() =>
                        setPz({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedMB}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedB}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValuePz({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={pz.checkedR}
                      onChange={() =>
                        setPz({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValuePz({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          </Grid>
          <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              3.4 -  Demonstra criatividade no enfrentamento dos desafios e 
              diante de situações imprevistas e inesperadas, 
              reajusta seus procedimentos de forma a reduzir a incidência 
              de riscos ao comprometimento dos objetivos estabelecidos. - Peso:{' '}
              {valueCoe.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedE}
                      onChange={() =>
                        setCoe({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedMB}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedB}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueCoe({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={coe.checkedR}
                      onChange={() =>
                        setCoe({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueCoe({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          </Grid>
          <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              3.5 - Demonstra ser oportuno na tomada de decisão, 
              evitando prejuízos à Administração. - Peso: {valueRf.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedE}
                      onChange={() =>
                        setRf({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedMB}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedB}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueRf({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rf.checkedR}
                      onChange={() =>
                        setRf({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueRf({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
          </Grid>
          <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              3.6 - Demonstra priorizar a tomada de decisão compartilhada. - Peso: {valueDt.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedE}
                      onChange={() =>
                        setDt({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedMB}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedB}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueDt({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={dt.checkedR}
                      onChange={() =>
                        setDt({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueDt({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueCl.peso +
                valueCp.peso +
                valuePz.peso +
                valueCoe.peso +
                valueRf.peso +
                valueDt.peso}
            </Paper>
          </Grid>
          </Grid>  
        <hr />
        <h4>4 - CAPACIDADE DE JULGAR E PROMOVER A JUSTIÇA</h4>
        <h4>Capacidade de promover o bem estar da equipe e/ou pessoas, regulada 
            por uma concepção comum de justiça, de forma estavél e sem influências 
            indevidas.
        </h4>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              4.1 -  Demonstra considerável senso de justiça na apreciação de 
              atos e mérito dos subordinados. - Peso: {valueD1.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d1.checkedE}
                      onChange={() =>
                        setD1({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD1({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d1.checkedMB}
                      onChange={() =>
                        setD1({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD1({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d1.checkedB}
                      onChange={() =>
                        setD1({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD1({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d1.checkedR}
                      onChange={() =>
                        setD1({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD1({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              4.2 - Demonstra capacidade de julgar os iguais 
              com impessoalidade e isonomia - Peso: {valueD2.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d2.checkedE}
                      onChange={() =>
                        setD2({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD2({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d2.checkedMB}
                      onChange={() =>
                        setD2({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD2({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d2.checkedB}
                      onChange={() =>
                        setD2({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD2({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d2.checkedR}
                      onChange={() =>
                        setD2({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD2({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              4.3 - Demonstra preocupação com a prática de bons exemplos, 
              visando convencer o subordinado ao exercício da justiça
               - Peso: {valueD3.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d3.checkedE}
                      onChange={() =>
                        setD3({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD3({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d3.checkedMB}
                      onChange={() =>
                        setD3({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD3({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d3.checkedB}
                      onChange={() =>
                        setD3({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD3({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d3.checkedR}
                      onChange={() =>
                        setD3({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD3({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              4.4 -  Demonstra capacidade de fundamentar seu julgamento com coerência, 
              baseando-se em critérios científicos e de legalidade - Peso: {valueD4.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d4.checkedE}
                      onChange={() =>
                        setD4({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD4({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d4.checkedMB}
                      onChange={() =>
                        setD4({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD4({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d4.checkedB}
                      onChange={() =>
                        setD4({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD4({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d4.checkedR}
                      onChange={() =>
                        setD4({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD4({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              4.5 -  Demonstra ser diligente pela prática do que é correto e impessoal, 
              visando favorecer a construção de uma instituição justa - Peso: {valueD5.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d5.checkedE}
                      onChange={() =>
                        setD5({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD5({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d5.checkedMB}
                      onChange={() =>
                        setD5({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD5({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d5.checkedB}
                      onChange={() =>
                        setD5({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD5({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d5.checkedR}
                      onChange={() =>
                        setD5({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD5({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              4.6 -  Demonstra, espontaneamente, a capacidade de reconhecer
               e/ou reparar os próprios erros - Peso: {valueD6.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d6.checkedE}
                      onChange={() =>
                        setD6({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD6({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d6.checkedMB}
                      onChange={() =>
                        setD6({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD6({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d6.checkedB}
                      onChange={() =>
                        setD6({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD6({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d6.checkedR}
                      onChange={() =>
                        setD6({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD6({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueD1.peso +
                valueD2.peso +
                valueD3.peso +
                valueD4.peso +
                valueD5.peso +
                valueD6.peso}
            </Paper>
          </Grid>
          </Grid>
          <hr />
          <h4>5 - CAPACIDADE DE DIREÇÃO E CONTROLE</h4>
        <h4>Capacidade de conduzir processos gerenciais e administrativos de forma 
          a atingir os resultados desejados, por meio das pessoas.
        </h4>
        <hr />
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              5.1 -   Demonstra capacidade de planejar ações, definindo objetivos e 
              estabelecendo metas claras e exequíveis - Peso: {valueD7.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d7.checkedE}
                      onChange={() =>
                        setD7({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD7({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d7.checkedMB}
                      onChange={() =>
                        setD7({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD7({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d7.checkedB}
                      onChange={() =>
                        setD7({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD7({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d7.checkedR}
                      onChange={() =>
                        setD7({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD7({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              5.2 - Demonstra capacidade de definir os procedimentos e as
               condições que envolvem a execução das tarefas a serem cumpridas. 
               - Peso: {valueD8.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d8.checkedE}
                      onChange={() =>
                        setD8({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD8({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d8.checkedMB}
                      onChange={() =>
                        setD8({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD8({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d8.checkedB}
                      onChange={() =>
                        setD8({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD8({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d8.checkedR}
                      onChange={() =>
                        setD8({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD8({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              5.3 - Demonstra empregar as pessoas e os recursos disponíveis, 
              sejam eles, logísticos ou financeiros, alocando-os da melhor 
              forma e de acordo com o planejamento estabelecido. - Peso: {valueD9.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d9.checkedE}
                      onChange={() =>
                        setD9({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD9({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d9.checkedMB}
                      onChange={() =>
                        setD9({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD9({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d9.checkedB}
                      onChange={() =>
                        setD9({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD9({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d9.checkedR}
                      onChange={() =>
                        setD9({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD9({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              5.4 -   Demonstra atribuir missões compatíveis com a habilitação
               do subordinado. - Peso: {valueD10.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d10.checkedE}
                      onChange={() =>
                        setD10({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD10({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d10.checkedMB}
                      onChange={() =>
                        setD10({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD10({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d10.checkedB}
                      onChange={() =>
                        setD10({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD10({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d10.checkedR}
                      onChange={() =>
                        setD10({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD10({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              5.5 -  Demonstra coordenar o desenvolvimento dos trabalhos
               intervindo quando necessário. - Peso: {valueD11.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d11.checkedE}
                      onChange={() =>
                        setD11({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD11({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d11.checkedMB}
                      onChange={() =>
                        setD11({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD11({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d11.checkedB}
                      onChange={() =>
                        setD11({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD11({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d11.checkedR}
                      onChange={() =>
                        setD11({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD11({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              5.6 -  Demonstra avaliar se os resultados alcançados coincidem 
              com os objetivos e metas estabelecidos. - Peso: {valueD12.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d12.checkedE}
                      onChange={() =>
                        setD12({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD12({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d12.checkedMB}
                      onChange={() =>
                        setD12({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD12({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d12.checkedB}
                      onChange={() =>
                        setD12({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD12({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d12.checkedR}
                      onChange={() =>
                        setD12({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD12({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueD7.peso +
                valueD8.peso +
                valueD9.peso +
                valueD10.peso +
                valueD11.peso +
                valueD12.peso}
            </Paper>
          </Grid>
          </Grid>
          <hr /> 
          <h4>6 - ATITUDE POLICIAL MILITAR</h4>
        <h4>Comprometimento do oficial com os deveres, valores e princípios da 
          ética institucuinal, em especial a lealdade, a probidade, a responsabilidade 
          e o sentimento de dever, com vista à cnsecução da disciplina policial.
        </h4>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              6.1 -   Demonstra praticar a verdade, a lealdade, a probidade e a 
              responsabilidade como fundamentos da dignidade pessoal. - 
              Peso: {valueD13.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d13.checkedE}
                      onChange={() =>
                        setD13({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD13({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d13.checkedMB}
                      onChange={() =>
                        setD13({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD13({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d13.checkedB}
                      onChange={() =>
                        setD13({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD13({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d13.checkedR}
                      onChange={() =>
                        setD13({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD13({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              6.2 -  Demonstra ser franco e expõe com propriedade suas opiniões, 
              mesmo que contrárias ao desejo ou a visão do grupo ou do chefe, 
              resguardando os princípios da disciplina e da boa educação. 
               - Peso: {valueD14.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d14.checkedE}
                      onChange={() =>
                        setD14({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD14({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d14.checkedMB}
                      onChange={() =>
                        setD14({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD14({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d14.checkedB}
                      onChange={() =>
                        setD14({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD14({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d14.checkedR}
                      onChange={() =>
                        setD14({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD14({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              6.3 - Demonstra assumir a responsabilidade por suas ações e omissões. 
              - Peso: {valueD15.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d15.checkedE}
                      onChange={() =>
                        setD15({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD15({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d15.checkedMB}
                      onChange={() =>
                        setD15({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD15({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d15.checkedB}
                      onChange={() =>
                        setD15({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD15({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d15.checkedR}
                      onChange={() =>
                        setD15({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD15({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              6.4 -   Demonstra exercer sua autoridade, respeitando os direitos 
              dos seus subordinados e exigindo o cumprimento de seus deveres 
              institucionais. - Peso: {valueD16.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d16.checkedE}
                      onChange={() =>
                        setD16({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD16({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d16.checkedMB}
                      onChange={() =>
                        setD16({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD16({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d16.checkedB}
                      onChange={() =>
                        setD16({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD16({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d16.checkedR}
                      onChange={() =>
                        setD16({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD16({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              6.5 -  Demonstra proceder conforme as normas que regem a PMPA, 
              preservando valores institucionais, exercitando a visão crítica e 
              a criatividade. - Peso: {valueD17.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d17.checkedE}
                      onChange={() =>
                        setD17({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD17({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d17.checkedMB}
                      onChange={() =>
                        setD17({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD17({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d17.checkedB}
                      onChange={() =>
                        setD17({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD17({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d17.checkedR}
                      onChange={() =>
                        setD17({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD17({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              6.6 -  Demonstra dedicação ao cumprimento do dever, empenhando-se 
              pela qualidade de suas ações. - Peso: {valueD18.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d18.checkedE}
                      onChange={() =>
                        setD18({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD18({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d18.checkedMB}
                      onChange={() =>
                        setD18({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD18({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d18.checkedB}
                      onChange={() =>
                        setD18({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD18({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d18.checkedR}
                      onChange={() =>
                        setD18({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD18({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueD12.peso +
                valueD14.peso +
                valueD15.peso +
                valueD16.peso +
                valueD17.peso +
                valueD18.peso}
            </Paper>
          </Grid>
          </Grid>
          <hr /> 
          <h4>7 - CONFIABILIDADE PROFISSIONAL</h4>
        <h4>Grau de confiança que desperta, em razão de seu desempenho funcional 
          e postura militar, refletindo o grau de confiabilidade do profissional 
          militar
        </h4>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              7.1 -    Demonstra que a missão que lhe for atribuída será bem 
              cumprida, sem a necessidade de supervisão ou fiscalização. - 
              Peso: {valueD19.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d19.checkedE}
                      onChange={() =>
                        setD19({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD19({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d19.checkedMB}
                      onChange={() =>
                        setD19({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD19({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d19.checkedB}
                      onChange={() =>
                        setD19({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD19({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d19.checkedR}
                      onChange={() =>
                        setD19({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD19({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              7.2 -  Demonstra praticar ações alinhadas aos objetivos institucionais. 
               - Peso: {valueD20.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d20.checkedE}
                      onChange={() =>
                        setD20({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD20({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d20.checkedMB}
                      onChange={() =>
                        setD20({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD20({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d20.checkedB}
                      onChange={() =>
                        setD20({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD20({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d20.checkedR}
                      onChange={() =>
                        setD20({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD20({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              7.3 -  Demonstra ser respeitado em razão de sua inteligência, 
              conhecimentos, experiência e postura Profissional. - Peso: {valueD21.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d21.checkedE}
                      onChange={() =>
                        setD21({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD21({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d21.checkedMB}
                      onChange={() =>
                        setD21({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD21({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d21.checkedB}
                      onChange={() =>
                        setD21({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD21({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d21.checkedR}
                      onChange={() =>
                        setD21({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD21({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              7.4 -    Demonstra ser pró-ativo na solução de problemas, 
              antecipando-se a eles, respondendo com presteza, agilidade e 
              prontidão. - Peso: {valueD22.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d22.checkedE}
                      onChange={() =>
                        setD22({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD22({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d22.checkedMB}
                      onChange={() =>
                        setD22({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD22({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d22.checkedB}
                      onChange={() =>
                        setD22({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD22({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d22.checkedR}
                      onChange={() =>
                        setD22({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD22({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              7.5 -   Demonstra ser discreto em suas atitudes e no trato de 
              assunto que, por sua natureza, devam ter difusão restrita a um 
              ambiente limitado. - Peso: {valueD23.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d23.checkedE}
                      onChange={() =>
                        setD23({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD23({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d23.checkedMB}
                      onChange={() =>
                        setD23({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD23({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d23.checkedB}
                      onChange={() =>
                        setD23({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD23({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d23.checkedR}
                      onChange={() =>
                        setD23({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD23({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              7.6 -  Demonstra confiabilidade em razão da maneira pela qual 
              assessora seus superiores e orienta seus pares e subordinados. 
              - Peso: {valueD24.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d24.checkedE}
                      onChange={() =>
                        setD24({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD24({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d24.checkedMB}
                      onChange={() =>
                        setD24({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD24({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d24.checkedB}
                      onChange={() =>
                        setD24({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD24({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d24.checkedR}
                      onChange={() =>
                        setD24({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD24({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueD19.peso +
                valueD20.peso +
                valueD21.peso +
                valueD22.peso +
                valueD23.peso +
                valueD24.peso}
            </Paper>
          </Grid>
          </Grid>
          <hr />
          <h4>8 - CONHECIMENTO E HABILIDADE TÉCNICO-PROFISSIONAL</h4>
        <h4>Potencial técnico-profissional e capacidade de buscar novos conhecimentos, 
          mantendo-se em constante preparação intelectual refletido no desempenho 
          profissional.
        </h4>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              8.1 -  Demonstra possuir conhecimento necessários ao exercício de 
              suas atribuições funcionais. - 
              Peso: {valueD25.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d25.checkedE}
                      onChange={() =>
                        setD25({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD25({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d25.checkedMB}
                      onChange={() =>
                        setD25({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD25({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d25.checkedB}
                      onChange={() =>
                        setD25({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD25({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d25.checkedR}
                      onChange={() =>
                        setD25({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD25({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              8.2 - Demonstra capacidade de aplicar seus conhecimentos teóricos 
              e experiências no desenvolvimento de casos concretos relacionados 
              as suas atividades funcionais.
               - Peso: {valueD26.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d26.checkedE}
                      onChange={() =>
                        setD26({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD26({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d26.checkedMB}
                      onChange={() =>
                        setD26({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD26({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d26.checkedB}
                      onChange={() =>
                        setD26({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD26({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d26.checkedR}
                      onChange={() =>
                        setD26({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD26({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              8.3 -   Demonstra se empenhar na ampliação e atualização de seus 
              conhecimentos, visando o auto-aperfeiçoamento profissional. - Peso: {valueD27.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d27.checkedE}
                      onChange={() =>
                        setD27({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD27({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d27.checkedMB}
                      onChange={() =>
                        setD27({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD27({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d27.checkedB}
                      onChange={() =>
                        setD27({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD27({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d27.checkedR}
                      onChange={() =>
                        setD27({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD27({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              8.4 - Demonstra aprender com facilidade novas técnicas, 
              compreende os novos conceitos e procedimentos relacionados à sua 
              atividade funcional.- Peso: {valueD28.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d28.checkedE}
                      onChange={() =>
                        setD28({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD28({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d28.checkedMB}
                      onChange={() =>
                        setD28({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD28({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d28.checkedB}
                      onChange={() =>
                        setD28({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD28({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d28.checkedR}
                      onChange={() =>
                        setD28({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD28({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              8.5 -    Demonstra capacidade de comunicação oral e escrita, que 
              possibilite a transmissão das idéias de forma clara, concisa e precisa, 
              em observância às normas da linguagem culta, ajustada e acessível ao 
              público alvo. - Peso: {valueD29.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d29.checkedE}
                      onChange={() =>
                        setD29({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD29({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d29.checkedMB}
                      onChange={() =>
                        setD29({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD29({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d29.checkedB}
                      onChange={() =>
                        setD29({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD29({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d29.checkedR}
                      onChange={() =>
                        setD29({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD29({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              8.6 -  Demonstra a capacidade de apresentar ideias inovadoras e 
              pertinentes para o aumento da eficiência das tarefas executadas. 
              - Peso: {valueD30.peso}
              <FormGroup row style={{ justifyContent: 'center' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d30.checkedE}
                      onChange={() =>
                        setD30({
                          checkedE: true,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD30({ peso: 0.25, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou raramente ou não demonstrou [0,25]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d30.checkedMB}
                      onChange={() =>
                        setD30({
                          checkedE: false,
                          checkedMB: true,
                          checkedB: false,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD30({ peso: 0.50, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou algumas vezes [0,50]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d30.checkedB}
                      onChange={() =>
                        setD30({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: true,
                          checkedI: false,
                          checkedR: false,
                          checkedNO: false
                        }) + setValueD30({ peso: 0.75, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstrou na maioria das vezes [0,75]"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={d30.checkedR}
                      onChange={() =>
                        setD30({
                          checkedE: false,
                          checkedMB: false,
                          checkedB: false,
                          checkedI: false,
                          checkedR: true,
                          checkedNO: false
                        }) + setValueD30({ peso: 1.00, click: 1 })
                      }
                      value={false}
                    />
                  }
                  label="Demonstro quase sempre [1,00]"
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid> 
        <Grid container spacing={1}>
          <Grid item xs={6}>
          <Paper className={classes.paper}>
              TOTAL DO ITEM AVALIADO:{' '}
              { valueD25.peso +
                valueD26.peso +
                valueD27.peso +
                valueD28.peso +
                valueD29.peso +
                valueD30.peso}
            </Paper>
          </Grid>
          </Grid>
          <hr />
        <h3 style={{ textAlign: 'center' }}>CONCEITO FINAL</h3>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              TOTAL DE CONCEITOS MARCADOS:{' '}
              {valueLav.click +
                valueNr.click +
                valueCfs.click +
                valueEp.click +
                valueCrd.click +
                valueFe.click +
                valueCd.click +
                valueEd.click +
                valueCa.click +
                valueAp.click +
                valueEcrh.click +
                valueCc.click +
                valueCl.click +
                valueCp.click +
                valuePz.click +
                valueCoe.click +
                valueRf.click +
                valueDt.click +
                valueD1.click +
                valueD2.click +
                valueD3.click +
                valueD4.click +
                valueD5.click +
                valueD6.click +
                valueD7.click +
                valueD8.click +
                valueD9.click +
                valueD10.click +
                valueD11.click +
                valueD12.click +
                valueD13.click +
                valueD14.click +
                valueD15.click +
                valueD16.click +
                valueD17.click +
                valueD18.click +
                valueD19.click +
                valueD20.click +
                valueD21.click +
                valueD22.click +
                valueD23.click +
                valueD24.click +
                valueD25.click +
                valueD26.click +
                valueD27.click +
                valueD28.click +
                valueD29.click +
                valueD30.click}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              VALOR PARCIAL:{' '}
              {valueLav.peso +
                valueNr.peso +
                valueCfs.peso +
                valueEp.peso +
                valueCrd.peso +
                valueFe.peso +
                valueCd.peso +
                valueEd.peso +
                valueCa.peso +
                valueAp.peso +
                valueEcrh.peso +
                valueCc.peso +
                valueCl.peso +
                valueCp.peso +
                valuePz.peso +
                valueCoe.peso +
                valueRf.peso +
                valueDt.peso +
                valueD1.peso +
                valueD2.peso +
                valueD3.peso +
                valueD4.peso +
                valueD5.peso +
                valueD6.peso +
                valueD7.peso +
                valueD8.peso +
                valueD9.peso +
                valueD10.peso +
                valueD11.peso +
                valueD12.peso +
                valueD13.peso +
                valueD14.peso +
                valueD15.peso +
                valueD16.peso +
                valueD17.peso +
                valueD18.peso +
                valueD19.peso +
                valueD20.peso +
                valueD21.peso +
                valueD22.peso +
                valueD23.peso +
                valueD24.peso +
                valueD25.peso +
                valueD26.peso +
                valueD27.peso +
                valueD28.peso +
                valueD29.peso +
                valueD30.peso}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              RESULTADO FINAL:{' '}
              {parseFloat(
                (
                  (valueLav.peso +
                    valueNr.peso +
                    valueCfs.peso +
                    valueEp.peso +
                    valueCrd.peso +
                    valueFe.peso +
                    valueCd.peso +
                    valueEd.peso +
                    valueCa.peso +
                    valueAp.peso +
                    valueEcrh.peso +
                    valueCc.peso +
                    valueCl.peso +
                    valueCp.peso +
                    valuePz.peso +
                    valueCoe.peso +
                    valueRf.peso +
                    valueDt.peso +
                    valueD1.peso +
                    valueD2.peso +
                    valueD3.peso +
                    valueD4.peso +
                    valueD5.peso +
                    valueD6.peso +
                    valueD7.peso +
                    valueD8.peso +
                    valueD9.peso +
                    valueD10.peso +
                    valueD11.peso +
                    valueD12.peso +
                    valueD13.peso +
                    valueD14.peso +
                    valueD15.peso +
                    valueD16.peso +
                    valueD17.peso +
                    valueD18.peso +
                    valueD19.peso +
                    valueD20.peso +
                    valueD21.peso +
                    valueD22.peso +
                    valueD23.peso +
                    valueD24.peso +
                    valueD25.peso +
                    valueD26.peso +
                    valueD27.peso +
                    valueD28.peso +
                    valueD29.peso +
                    valueD30.peso) /
                  (valueLav.click +
                    valueNr.click +
                    valueCfs.click +
                    valueEp.click +
                    valueCrd.click +
                    valueFe.click +
                    valueCd.click +
                    valueEd.click +
                    valueCa.click +
                    valueAp.click +
                    valueEcrh.click +
                    valueCc.click +
                    valueCl.click +
                    valueCp.click +
                    valuePz.click +
                    valueCoe.click +
                    valueRf.click +
                    valueDt.click +
                    valueD1.click +
                    valueD2.click +
                    valueD3.click +
                    valueD4.click +
                    valueD5.click +
                    valueD6.click +
                    valueD7.click +
                    valueD8.click +
                    valueD9.click +
                    valueD10.click +
                    valueD11.click +
                    valueD12.click +
                    valueD13.click +
                    valueD14.click +
                    valueD15.click +
                    valueD16.click +
                    valueD17.click +
                    valueD18.click +
                    valueD19.click +
                    valueD20.click +
                    valueD21.click +
                    valueD22.click +
                    valueD23.click +
                    valueD24.click +
                    valueD25.click +
                    valueD26.click +
                    valueD27.click +
                    valueD28.click +
                    valueD29.click +
                    valueD30.click)
                ).toFixed(2)
              )}
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            Se atribuiu nota inferior a 3,0 (três) ou superior a 5,50 (cinco e cinquenta),
                JUSTIFIQUE-SE:
                <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Justifique"
                  multiline
                  rowsMax="6"
                  style={{
                    width: 400,
                    flex: 1
                  }}
                  value={values.multiline}
                  onChange={handleChange('multiline')}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                </form>
                <div style={{ textAlign: 'right', marginBottom: 5 }}>
            {!status && (
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                className={classes.margin}
                
                    //save()
                
              >
                Salvar
              </Fab>
            )}

            <Fab
              variant="extended"
              color="secondary"
              aria-label="add"
              className={classes.margin}
              onClick={showForm}
            >
              Voltar
            </Fab>
          </div>
            </Paper>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
}
