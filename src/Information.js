import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// RADIO
import Radio from '@material-ui/core/Radio';
//import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
//import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: 5
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    }
  }));



  function Information() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [selectedValuec, setSelectedValuec] = React.useState('c');
    const [selectedValuee, setSelectedValuee] = React.useState('e');
    const [selectedValueg, setSelectedValueg] = React.useState('g');
    const [selectedValuei, setSelectedValuei] = React.useState('i');
    const [selectedValuel, setSelectedValuel] = React.useState('l');
    const [selectedValuen, setSelectedValuen] = React.useState('n');
    const [selectedValuep, setSelectedValuep] = React.useState('p')

    const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  const handleChangec = event => {
    setSelectedValuec(event.target.value);
  };
  const handleChangee = event => {
    setSelectedValuee(event.target.value);
  };
  const handleChangeg = event => {
    setSelectedValueg(event.target.value);
  };
  const handleChangei = event => {
    setSelectedValuei(event.target.value);
  };
  const handleChangel = event => {
    setSelectedValuel(event.target.value);
  };
  const handleChangen = event => {
    setSelectedValuen(event.target.value);
  };
  const handleChangep = event => {
    setSelectedValuep(event.target.value);
  };

  
    const classes = useStyles();
      return (
          <>
            <h3 style={{textAlign: 'center'}}>FORMULÁRIO DE INFORMAÇÃO FUNCIONAL</h3>
       <hr/>
       <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>NOME: JOSÉ NILSON SILVA DOS SANTOS</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>GRAD: CB PM</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>DATA DE INCLUSÃO: 04/06/2008</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>MEDELHAS E CONDECORAÇÕES: 6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ELOGIOS: 10</Paper>
        </Grid>
      </Grid>
      <h3 style={{textAlign: 'center'}}>PUNIÇÕES DISCIPLINARES</h3>
      <Grid container spacing={1}>
        <Grid item xs={3} >
          <Paper className={classes.paper}>PRISÃO: 0</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>DETENÇÃO: 0</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>REPREENSÃO: 0</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>COMPORTAMENTO: EXCEPCIONAL</Paper>
        </Grid>
        </Grid>
        <hr/>
        <Grid container spacing={1}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>FOI CONDENADO EM PROCESSO CRIMINAL EM PRIMEIRA INSTÂNCIA, 
          ATÉ A DECISÃO OU TRIBUNAL SUPERIOR?:
          SIM <Radio color="primary"
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      /> NÃO  <Radio
      checked={selectedValue === 'b'}
      onChange={handleChange}
      value="b"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'B' }}
    /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>ESTÁ AGUARDANDO RESERVA OU
           ESTÁ DESOBRIGADO DAS FUNÇÕES DE ACORDO COM A CONSTITUIÇÃO?: 
           SIM <Radio color="primary"
        checked={selectedValuec === 'c'}
        onChange={handleChangec}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      /> NÃO  <Radio
      checked={selectedValuec === 'd'}
      onChange={handleChangec}
      value="d"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'D' }}
    /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ESTÁ PRESO PREVENTIVAMENTE OU EM FLAGRANTE DELITO?:
          SIM <Radio color="primary"
        checked={selectedValuee === 'e'}
        onChange={handleChangee}
        value="e"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'E' }}
      /> NÃO  <Radio
      checked={selectedValuee === 'f'}
      onChange={handleChangee}
      value="f"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'F' }}
    /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ESTÁ RESPONDENDO CONSELHO DE DISCIPLINA?:
          SIM <Radio color="primary"
        checked={selectedValueg === 'g'}
        onChange={handleChangeg}
        value="g"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'G' }}
      /> NÃO  <Radio
      checked={selectedValueg === 'h'}
      onChange={handleChangeg}
      value="h"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'H' }}
    /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ESTÁ DE LTSP NA JUNTA REGULAR DE SAÚDE?:
          SIM <Radio color="primary"
        checked={selectedValuei === 'i'}
        onChange={handleChangei}
        value="i"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'I' }}
      /> NÃO  <Radio
      checked={selectedValuei === 'j'}
      onChange={handleChangei}
      value="j"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'J' }}
    /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ESTÁ NO EXERCÍCIO DA FUNÇÃO DE ACORDO COM SEU "QPMP"?:
          SIM <Radio color="primary"
        checked={selectedValuel === 'l'}
        onChange={handleChangel}
        value="l"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'L' }}
      /> NÃO  <Radio
      checked={selectedValuel === 'm'}
      onChange={handleChangel}
      value="m"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'M' }}
    /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ESTÁ A DISPOSIÇÃO DE OUTRO ORGÃO?:
          SIM <Radio color="primary"
        checked={selectedValuen === 'n'}
        onChange={handleChangen}
        value="n"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'N' }}
      /> NÃO  <Radio
      checked={selectedValuen === 'o'}
      onChange={handleChangen}
      value="o"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'O' }}
    /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>ESTÁ AGREGADO?:
          SIM <Radio color="primary"
        checked={selectedValuep === 'p'}
        onChange={handleChangep}
        value="p"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'P' }}
      /> NÃO  <Radio
      checked={selectedValuep === 'q'}
      onChange={handleChangep}
      value="q"
      name="radio-button-demo"
      inputProps={{ 'aria-label': 'Q' }}
    /> | SE SIM, QUAL MOTIVO: <input type="text"/></Paper>
        </Grid>
      </Grid>
      </div>
    </>
    )

  }

  export default Information;