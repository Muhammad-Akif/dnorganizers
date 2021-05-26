import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import DeleteMenuVenu from "./DeleteMenuVenu"
import uploadToFirebase from '../../../functions/uploadToFirebase';
import { useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Item from '../../../Models/models/item';
import firebase from '../../../config/firebase';

import {deleteItems} from '../../../redux/actions';

const useStyles = makeStyles((theme) =>
({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "30vw",
        maxWidth: 300,
    },
}),
);

export default function ColorTextFields(props) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [deleteName, setDeleteName] = React.useState(''); //{id, name, price}
    const [open, setOpen] = React.useState(false);

    const { Items } = props;

    const handleChange = (event) => {
        // const obj = JSON.parse(event.target.value) //{name, id}
        // setDeleteName(event.target.value.name);
        // setDeleteName(obj.name);
        // console.log('==========================', obj)
        console.log('==================>>>', event.target.value)
        setDeleteName(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleItemDelete = () => {
        // deleteName
        // // deleteMenuId, deleteVenuId
        if (deleteName.id.length <= 1) {
            alert('Select Item First')
            return
        }
        if (props.title == 'venu' &&  props.eventTitle == 'Wedding') {
            firebase.database().ref(`events/wedding/items/venu/${deleteName.id}`).remove().then(() => {
                dispatch(deleteItems('weddingItems', deleteName.id, 'venu'));
                alert('Successfully Deleted!', 'This item is no more exists.', [{text: 'Ok', style: 'destructive'}])
            }).catch(() => {
                alert('Something went wrong!', 'Please check your network.', [{text: 'Ok', style: 'destructive'}])
            })
        } else if (props.title == 'menu' &&  props.eventTitle == 'Wedding') {
            firebase.database().ref(`events/wedding/items/menu/${deleteName.id}`).remove().then(() => {
                dispatch(deleteItems('weddingItems', deleteName.id, 'menu'));
                alert('Successfully Deleted!', 'This item is no more exists.', [{text: 'Ok', style: 'destructive'}])
            }).catch(() => {
                alert('Something went wrong!', 'Please check your network.', [{text: 'Ok', style: 'destructive'}])
            })
        } else if (props.title == 'venu' &&  props.eventTitle == 'Birthday' ) {
            firebase.database().ref(`events/birthday/items/venu/${deleteName.id}`).remove().then(() => {
                dispatch(deleteItems('birthdayItems', deleteName.id, 'venu'));
                alert('Successfully Deleted!', 'This item is no more exists.', [{text: 'Ok', style: 'destructive'}])
            }).catch(() => {
                alert('Something went wrong!', 'Please check your network.', [{text: 'Ok', style: 'destructive'}])
            })
        } else if (props.title == 'menu' &&  props.eventTitle == 'Birthday') {
            firebase.database().ref(`events/birthday/items/menu/${deleteName.id}`).remove().then(() => {
                dispatch(deleteItems('birthdayItems', deleteName.id, 'menu'));
                alert('Successfully Deleted!', 'This item is no more exists.', [{text: 'Ok', style: 'destructive'}])
            }).catch(() => {
                alert('Something went wrong!', 'Please check your network.', [{text: 'Ok', style: 'destructive'}])
            })
        } else if (props.title == 'venu' && props.eventTitle == "Corporate") {
            firebase.database().ref(`events/corporate/items/venu/${deleteName.id}`).remove().then(() => {
                dispatch(deleteItems('corporateItems', deleteName.id, 'venu'));
                alert('Successfully Deleted!', 'This item is no more exists.', [{text: 'Ok', style: 'destructive'}])
            }).catch(() => {
                alert('Something went wrong!', 'Please check your network.', [{text: 'Ok', style: 'destructive'}])
            })
        } else if (props.title == 'menu' && props.eventTitle == "Corporate") {
            firebase.database().ref(`events/corporate/items/menu/${deleteName.id}`).remove().then(() => {
                dispatch(deleteItems('corporateItems', deleteName.id, 'menu'));
                alert('Successfully Deleted!', 'This item is no more exists.', [{text: 'Ok', style: 'destructive'}])
            }).catch(() => {
                alert('Something went wrong!', 'Please check your network.', [{text: 'Ok', style: 'destructive'}])
            })
        }
        //venu
    }


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const object = {
            name,
            price
        }
        if (props.title == 'menu' && props.eventTitle == 'Birthday') {
            uploadToFirebase(
                'events/birthday/items/menu',
                { name, price },
                'Successfully Added.',
                'You now have new Birthday menu item!',
                "Something went wrong.",
                'Please check your network!',
                dispatch,
                'birAddMenu'
            )
        } else if (props.title == 'venu' && props.eventTitle == 'Birthday') {
            uploadToFirebase(
                'events/birthday/items/venu',
                { name, price },
                'Successfully Added.',
                'You now have new Birthday menu item!',
                "Something went wrong.",
                'Please check your network!',
                dispatch,
                'birAddVenu'
            )

        } else if (props.title == 'menu' && props.eventTitle == 'Wedding') {
            uploadToFirebase(
                'events/wedding/items/menu',
                { name, price },
                'Successfully Added.',
                'You now have new Birthday menu item!',
                "Something went wrong.",
                'Please check your network!',
                dispatch,
                'addMenu'
            )
        } else if (props.title == 'venu' && props.eventTitle == 'Wedding') {
            uploadToFirebase(
                'events/wedding/items/venu',
                { name, price },
                'Successfully Added.',
                'You now have new Birthday menu item!',
                "Something went wrong.",
                'Please check your network!',
                dispatch,
                'addVenu'
            )
        } else if (props.title == 'menu' && props.eventTitle == 'corporate') {
            uploadToFirebase(
                'events/corporate/items/menu',
                { name, price },
                'Successfully Added.',
                'You now have new Birthday menu item!',
                "Something went wrong.",
                'Please check your network!',
                dispatch,
                'corAddMenu'
            )
        } else if (props.title == 'venu' && props.eventTitle == 'corporate') {
            uploadToFirebase(
                'events/corporate/items/venu',
                { name, price },
                'Successfully Added.',
                'You now have new Birthday menu item!',
                "Something went wrong.",
                'Please check your network!',
                dispatch,
                'corAddVenu'
            )
        }
        console.log("object menu venu ===> ", object)
        setName('')
        setPrice('')
    }

    // doing this in order to prevent item.venu problem
    let menuVenuItems = []
    try {
        menuVenuItems = [...Items.venu];
    } catch (error) {

    }

    if (props.title == 'menu') {
        try {
            menuVenuItems = [...Items.menu];
        } catch (error) {

        }
    }

    const getItemIndex = (id, items) => {
        for (let i = 0; i < items.length; i++){
            if (items[i].id == id) {
                return i;
            }
        }
        return "";
    }

    return (
        <>
            {console.log('popopopopopopopoppo', props)}
            <h3 style={{ fontFamily: "serif,'Sacramento', Arial" }} color="secondary">ADD {props.title.toUpperCase()}</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    // autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "25vw" }}
                    type="text"
                    color="secondary"
                    fullWidth
                />
                <TextField
                    // autoFocus
                    margin="dense"
                    style={{ width: "25vw" }}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="name"
                    label="Price"
                    color="secondary"
                    type="number"
                    fullWidth
                />
                <Button variant="outlined" onClick={handleSubmit} color="secondary" style={{ padding: "8px", fontSize: "12px" }}>
                    Add {props.title}
                </Button>
            </form>
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Venu</InputLabel>
                    {/* {console.log('11111111111111111111', deleteName)} */}
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={menuVenuItems[getItemIndex( deleteName.id, menuVenuItems)]}
                        onChange={handleChange}
                    >
                        {/* {console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Items)} */}
                        <MenuItem value="">
                            Select
                        </MenuItem>
                        {/* {console.log('asdasdasdasdasda', Items.venu)} */}
                        {menuVenuItems.map((item) => <MenuItem key={item.id} value={item} >{item.name}</MenuItem>)}
                        {/* <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                </FormControl>
                <Button variant="outlined" onClick={handleItemDelete} color="secondary" className="venuDelete" style={{ padding: "8px 30px", margin: "10px 0px 0px 5px", fontSize: "12px" }}>
                    Delete {props.title}
                </Button>
            </div>
            {/* <DeleteMenuVenu title={props.title} /> */}
        </>
    );
}
