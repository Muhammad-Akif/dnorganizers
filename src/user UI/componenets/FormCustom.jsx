import React, { useState } from 'react'
import Table from "./TableCustom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    formControl: {
      margin: theme.spacing(1),
      width: "100%"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  },
}));

export default function Formtemp(props) {
  const { getData, name, menu, venu, price, setName, setVenu, setMenu, setPrice } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  
  const citiesList = ['Islamabad','Karachi','Multan','Faisalabad','Rawalpindi','Peshawar']
  const handleChange = (event) => {
    const name = event.target.name;
    setVenu(name)
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const menuSelection = (list) => {
    setMenu(list);
  }
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={submitHandler}>
        <TextField style={{ width: '100%' }} value={name} onChange={(e) => { setName(e.target.value) }} label="Name" variant="outlined" required />
        <FormControl style={{ width: '100%' }} variant="outlined" required className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple" required >Venu</InputLabel>
          <Select
            native
            required
            value={state.age}
            onChange={handleChange}
            label="Age"
            inputProps={{
              name: 'age',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {citiesList.map((v,i)=>{
              return <option index={i} value={v} >{v}</option>
            })}
          </Select>
        </FormControl>
        <TextField style={{ width: '100%' }} value={getData} readOnly label="Theme" variant="outlined" />
        {/* <TextField style={{ width: '100%' }} value={venu} onChange={(e) => { setVenu(e.target.value) }} label="Venu" variant="outlined" required /> */}
        <TextField type="number" style={{ width: '100%' }} value={price} onChange={(e) => { setPrice(e.target.value) }} readOnly label="Price" variant="outlined" required />
        <Table data={props.data} item={menu} onSelectMenu={menuSelection} />
      </form>
    </>
  )
}
