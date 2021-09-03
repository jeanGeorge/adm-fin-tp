import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function Inicio() {
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={12} justify="space-between" style={{maxWidth: "500px"}}>
          <Typography variant="h6" component="h6" gutterBottom align="justify"><br/>
            O presente trabalho foi desenvolvido pelos alunos:{" "}<br/>
            <a href="https://github.com/resende-gabriel">Gabriel Resende</a>{" "}
            (2018046904), <br/><a href="https://github.com/icarovie">Ícaro Vieira</a>{" "}
            (2018046556),<br/>{"  "}
            <a href="https://github.com/jeanGeorge/">Jean George</a>{" "}
            (2018047021){" "}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} justify="space-between">
          <Typography variant="h6" component="h6" gutterBottom align="justify">
            Nosso objetivo é possibilitar a criação e edição de um Balanço
            Patrimonial, uma importante ferramenta no se que se refere à análise
            de demonstrações financeiras e contábeis de uma organização, de
            maneira simples e interativa. Dentre as tecnologias utilizadas
            estão: HTML, CSS e JavaScript (biblioteca de desenvolvimento React).
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} justify="space-between">
          <Typography variant="h6" component="h6" gutterBottom align="justify">
            Caso seja de interesse, o código fonte do projeto está disponível no{" "}
            <a href="https://github.com/jeanGeorge/adm-fin-tp">GitHub</a>.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
