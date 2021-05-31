import React, { useState } from 'react'
import Table from "./TableCustom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { LensTwoTone } from '@material-ui/icons';

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
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  },
}));

export default function Formtemp(props) {
  const { getData, people, menu, venu, price,setDesignerName, setPeople, setVenuPrice,setOccuredDate, setVenu, setMenu, setPrice, Items } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [designers, setDesigners] = React.useState({
    designers: '',
    name: 'hai',
  });

  const DesignersList = ['Ramish Ali', 'Muhammad Rafeh', 'Rabia Imtiyaz', 'Aleshba Asif', 'Muhammad Akif', 'Halima Sultan']

  const handleChange = (event) => {
    const name = event.target.name;
    const getValue = event.target.value;
    let price = 0;
    Items.venu.forEach(item => {
      if (item.name == getValue){
        price = item.price;
      }

    })
    if(name=="age"){
      setVenuPrice(parseInt(price)); 
      setVenu(getValue);
    } 
    else{
      setDesignerName(getValue);
    } 
    console.log(getValue)
    setState({
      ...state,
      [name]: event.target.value,
    });
    setDesigners({
      ...state,
      [name]: event.target.value,
    });
  };
  const menuSelection = (list) => { // list = [{id, name, price},....]
    // here we want to calculate menu item's total price;
    let price = 0
    list.forEach(item => {
      price = price + item.price;
    })
    console.log('ppppppp', price)
    props.setMenuPrice(price);
    setMenu(list);
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={submitHandler}>
        <TextField type="number" style={{ width: '100%' }} value={people} onChange={(e) => { setPeople(parseInt(e.target.value)) }} label="Peoples" variant="outlined" required />
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
            {Items.venu.map((v, i) => {
              console.log('--------------------',v)
              return <option index={i} value={v.name} >{v.name}</option>
            })}
          </Select>
        </FormControl>
        <FormControl style={{ width: '100%' }} variant="outlined" required className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple" required >Designers</InputLabel>
          <Select
            native
            required
            value={designers.designers}
            onChange={handleChange}
            label="Designers"
            inputProps={{
              name: 'designers',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {DesignersList.map((v, i) => {
              return <option index={i} value={v} >{v}</option>
            })}
          </Select>
        </FormControl>
        <TextField style={{ width: '100%' }} value={getData} readOnly label="Theme" variant="outlined" />
        {/* <TextField style={{ width: '100%' }} value={venu} onChange={(e) => { setVenu(e.target.value) }} label="Venu" variant="outlined" required /> */}
        {/* <TextField type="number" style={{ width: '100%' }} value={price} onChange={(e) => { setPrice(e.target.value) }} readOnly label="Price" variant="outlined" required /> */}
        <TextField
          style={{ width: '30%', margin: '0 auto', display: 'table' }}
          id="datetime-local"
          label="Booking Date"
          type="datetime-local"
          onChange={(e) => { setOccuredDate(e.target.value); console.log(e.target.value) }}
          defaultValue="2000-04-04T05:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Table data={props.data} item={menu} onSelectMenu={menuSelection} />
      </form>
    </>
  )
}
