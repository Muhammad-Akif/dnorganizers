import { isObject } from '@material-ui/data-grid';
import React, { useState } from 'react'
import firebase from '../../../config/firebase'
import Table from "./Table"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Formtemp(props) {
    const { getData, name, theme, menu, venu, price, setName, setTheme, setVenu, setMenu, setPrice } = props;
    // console.log("data ==> ", props)
    const classes = useStyles();

    const menuSelection = (list) => {
        setMenu(list);
    }
    const submitHandler = (e) => {

        e.preventDefault();

    }
    return (
        <>
            <form className={classes.root} autoComplete="off" onSubmit={submitHandler}>
                <TextField style={{width: '100%'}} value={name} onChange={(e) => { setName(e.target.value) }} label="Name" variant="outlined"/>
                <TextField style={{width: '100%'}} value={getData} readOnly label="Theme" variant="outlined"/>
                <TextField style={{width: '100%'}} value={venu} onChange={(e) => { setVenu(e.target.value) }} label="Venu" variant="outlined"/>
                <TextField type="number" style={{width: '100%'}} value={price} onChange={(e) => { setPrice(e.target.value) }} label="Price" variant="outlined"/>
                <Table data={props.data} item={menu} onSelectMenu={menuSelection} />
            </form>
        </>
    )
}
