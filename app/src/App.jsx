import React, { useState } from "react";
import "./App.css";

import { Typography, Container, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import BalancoPatrimonial from "./components/BalancoPatrimonial";
import Inicio from "./components/Inicio";

const App = () => {
  const title = "Análise Balanço Patrimonial";
  const college = "Universidade Federal De Minas Gerais";
  const course = "CAD167 - Administração Financeira";

  const [renderBP, setRenderBP] = useState(false);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  // mockado por enquanto
  const props = {
    cabecalho: {},
    ativos: [],
    passivos: [],
  };

  const classes = useStyles();

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Container spacing={1}>
            <Typography variant="h6" component="h6" gutterBottom>
              {college}
              <br />
              {course}
              <br />
            </Typography>
            <Typography variant="h3" component="h4" gutterBottom>
              {title}
            </Typography>
            <div className={classes.root}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setRenderBP(false);
                }}
              >
                Inicio
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setRenderBP(true);
                }}
              >
                Montar Balanço Patrimonial
              </Button>
            </div>
            {renderBP && <BalancoPatrimonial {...props} />}
            {!renderBP && <Inicio {...props} />}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
