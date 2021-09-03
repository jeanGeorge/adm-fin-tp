/* eslint-disable */
import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "date-fns";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import Input from "@material-ui/core/Input";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const company = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextField
            id="company"
            label="Empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-select-currency"
            select
            label="Moeda"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-select-currency"
            select
            label="Unidade"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            fullWidth
          >
            {units.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy"
              margin="normal"
              id="initial-yar"
              label="Exercício Inicial"
              value={new Date(initialYear + "-01-10")}
              onChange={(year) => setInitialYear(year.getFullYear())}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="yyyy"
              margin="normal"
              id="final-year"
              label="Exercício Final"
              value={new Date(finalYear + "-01-10")}
              onChange={(year) => setFinalYear(year.getFullYear())}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <br></br>
    </>
  );
};
