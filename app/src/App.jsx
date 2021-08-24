import React from "react";
import "./App.css";

import { Typography, Container, Grid } from "@material-ui/core";
import BalancoPatrimonial from "./components/BalancoPatrimonial/index";

const App = () => {
  const title = "Trabalho de Administração Financeira";

  // mockado por enquanto
  const props = {
    cabecalho: {},
    ativos: [],
    passivos: [],
  };

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Container spacing={1}>
            <Typography variant="h3" component="h4" gutterBottom>
              {title}
            </Typography>
            <BalancoPatrimonial {...props} />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
