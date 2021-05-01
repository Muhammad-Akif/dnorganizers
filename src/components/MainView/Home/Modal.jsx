import React, { useState } from 'react';
import firebase from '../../../config/firebase';
import Formtemp from './Form'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Modal() {
    const [name, setName] = useState('')
    const [theme, setTheme] = useState('')
    const [venu, setVenu] = useState('')
    const [menu, setMenu] = useState([])
    const [price, setPrice] = useState(0)

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [data, setData] = useState([]);

    const handleClickOpen = (scrollType) => () => {
        firebase.database().ref('/events/birthday/items/menu').on('value', function (snapshot) {
            let items = snapshot.val()
            console.log(items)
            const list = []
            for (let item in items) {
                let itemName = items[item].name
                console.log("itemName ===> ", itemName)
                list.push(itemName)
            }
            setData(list)
        });
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        const item = {
            name,
            theme,
            venu,
            price,
            menu
        }
        firebase.database().ref('/events/wedding/packages').push(item);
        console.log('--------------------------------------->>>>>>>>', item)
        setOpen(false);
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
            <Button onClick={handleClickOpen('paper')}>Add Package</Button>
            {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                // style={{height}}
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
                        <Formtemp data={data} name={name} theme={theme} menu={menu} venu={venu} price={price} setName={setName} setTheme={setTheme} setVenu={setVenu} setMenu={setMenu} setPrice={setPrice} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{setOpen(false);}} style={{ fontSize: '14px' }} color="primary">
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
