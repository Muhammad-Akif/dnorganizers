import React, { useState } from 'react';
import firebase from '../../../config/firebase';
import Formtemp from './Form'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
    const getData = props.getData.toLowerCase();
    const updateTable = props.updateTable
    const [name, setName] = useState('')
    const [venu, setVenu] = useState('')
    const [checkValid, setValid] = useState('')
    const [menu, setMenu] = useState([])
    const [price, setPrice] = useState(0)
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [data, setData] = useState([]);

    const handleClickOpen = (scrollType) => () => {
        firebase.database().ref(`/events/${getData}/items/menu`).on('value', function (snapshot) {
            let items = snapshot.val()
            const list = []
            for (let item in items) {
                let itemName = items[item].name
                list.push(itemName)
            }
            setData(list)
        });
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setValid("")
        if(name.length > 0 && price.length > 1 && venu.length > 0 && menu.length > 0) {
            const item = {
                name,
                price,
                theme: props.getData,
                venu,
                menu
            }
            firebase.database().ref(`/events/${getData}/packages`).push(item);
            updateTable("updated")
            setOpen(false);
            setName('');
            setVenu('');
            setPrice(0);
            setMenu([]);
        }
        else{
            setValid("Incomplete Package Information ...")
        }

    };


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen('paper')}>Add Package</Button>
            {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                style={{width: "100%",margin: "0 auto",height: "96%"}}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Package Details ...</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <h5 style={{textAlign: 'center',color: 'red'}}>{checkValid}</h5>
                        <Formtemp getData={props.getData} data={data} name={name} menu={menu} venu={venu} price={price} setName={setName} setVenu={setVenu} setMenu={setMenu} setPrice={setPrice} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setOpen(false);setValid(""); }} style={{ fontSize: '14px' }} color="primary">
                        Cancel
                     </Button>
                    <Button onClick={handleClose} style={{ fontSize: '14px' }} color="primary">
                        Submit
                     </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
