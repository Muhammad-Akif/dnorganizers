import React, { useState } from 'react'
import Table from "./Table"
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
  const { getData,name,setName, people, designerName , menu, prices,setDesignerName, setPeople, setVenuPrice,setOccuredDate, setVenu, setMenu, setPrices, Items } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [designers, setDesigners] = React.useState({
    designers: '',
    name: 'hai',
  });

  const DesignersList = ['Liam', 'Elijah', 'Lucas', 'Noah', 'Henry', 'Alexander']

  const handleChange = (event) => {
    const name = event.target.name;
    const getValue = event.target.value;
    let price = 0;
    Items?.forEach(item => {
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

  // Doing this in order to get unique venu
  const venuObj = {} //{id: name,....}
  Items.forEach(item => {
    venuObj[item.id] = item.name;
  })
  const renderVenu = [] //[{id, name},.........]
  for (let id in venuObj) {
    renderVenu.push({id, name: venuObj[id]})
  }
  return (
    <>
      <form className={classes.root} autoComplete="off" onSubmit={submitHandler}>
        <TextField style={{ width: '100%' }} value={name} onChange={(e) => { setName(e.target.value) }} label="Name" variant="outlined" required />
        <TextField style={{ width: '100%' }} value={getData} readOnly label="Theme" variant="outlined" />
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
            
            {renderVenu?.map((v, i) => {
              console.log('--------------------=====================',v)
              return <option index={i} value={v.name} >{v.name}</option>
            })}
          </Select>
        </FormControl>
        {/* <FormControl style={{ width: '100%' }} variant="outlined" required className={classes.formControl}>
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
        </FormControl> */}
        <TextField style={{ width: '100%' }} value={designerName} onChange={(e) => { setDesignerName(e.target.value) }} label="Designer" variant="outlined" required />
        <TextField type="number" style={{ width: '100%' }} value={prices} onChange={(e) => { setPrices(e.target.value) }} readOnly label="Price" variant="outlined" required />
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




























// import React, { useState } from 'react'
// import Table from "./Table"
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));


// export default function Formtemp(props) {
//   const { getData, name, menu, venu, price, date, setDate, people, setPeople, setName, setVenu, setMenu, setPrice } = props;
//   const classes = useStyles();
//   const menuSelection = (list) => { // list = [{id, name, price},....]
//     // here we want to calculate menu item's total price;
//     // let price = 0
//     // list.forEach(item => {
//     //   price = price + item.price;
//     // })
//     // console.log('ppppppp', price)
//     // props.setMenuPrice(price);
//     setMenu(list);
    
//   }
//   const submitHandler = (e) => {
//     e.preventDefault();
//   }
//   return (
//     <>
//       <form className={classes.root} autoComplete="off" onSubmit={submitHandler}>
//         <TextField style={{ width: '100%' }} value={name} onChange={(e) => { setName(e.target.value) }} label="Name" variant="outlined" required />
//         <TextField style={{ width: '100%' }} value={getData} readOnly label="Theme" variant="outlined" />
//         <TextField style={{ width: '100%' }} value={venu} onChange={(e) => { setVenu(e.target.value) }} label="Venu" variant="outlined" required />
//         <TextField type="number" style={{ width: '100%' }} value={people} onChange={(e) => { setPeople(e.target.value) }} label="Price" variant="outlined" required />
//         <TextField type="number" style={{ width: '100%' }} value={price} onChange={(e) => { setPrice(e.target.value) }} label="Peoples" variant="outlined" required />
//         <TextField
//           style={{ width: '30%', margin: '0 auto', display: 'table' }}
//           id="datetime-local"
//           label="Occured Date"
//           type="datetime-local"
//           onChange={(e) => { setDate(e.target.value) }}
//           defaultValue="2000-04-04T05:30"
//           // className={classes.textField}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <Table data={props.data} item={menu} onSelectMenu={menuSelection} />
//       </form>
//     </>
//   )
// }
