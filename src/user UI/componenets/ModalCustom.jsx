import React, { useState } from 'react';
import firebase from '../../config/firebase';
import Formtemp from './FormCustom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../Models/models/item';
import { addPendingInvoice } from '../../redux/actions';

export default function Modal(props) {
    const getData = props.getData.toLowerCase();
    const [people, setPeople] = useState(20)
    const [venu, setVenu] = useState('')
    const [venuPrice, setVenuPrice] = useState(0);
    const [data,setData] = useState([])
    const [designerName,setDesignerName] = useState('')
    // const [name, setName] = useState('')

    const [checkValid, setValid] = useState('')
    const [menu, setMenu] = useState([]) //[{id, name, price}, .....] //checked data of table

    const [menuPrice, setMenuPrice] = useState(0);

    const [price, setPrice] = useState('')
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [occuredDate, setOccuredDate] = useState([]); //[{id, name, price},.......] getting from firebase || object of Item
    const dispatch = useDispatch();

    const handleClickOpen = (scrollType) => () => {
        firebase.database().ref(`/events/${getData}/items/menu`).on('value', function (snapshot) {
            let items = snapshot.val()
            console.log(items)
            const list = []
            for (let key in items) {
                let {name, price} = items[key]
                list.push(new Item(key, name, price))
            }
            setData(list)
        });
        setOpen(true);
        setScroll(scrollType);
    };

    const email = localStorage.getItem('user')

    const handleClose = () => {
        //here we are submitting to firebase;
        const fullMenu = menu.map(item => {
            // delete item["checked"];
            // price = price + (item.price * peopleCount);
            return {
                id: item.id,
                name: item.name,
                price: parseInt(item.price)
            };
        })
        setValid("")
        const verifyObj={
            venu: venu.length,
            menu: menu.length,
            occuredDate: occuredDate.length,
            people:people.length,
            designerName:designerName.length
        }
        console.log("verifyObj ====> ",verifyObj)
        if ( venu.length > 0 && menu.length > 0 && occuredDate.length > 0 && people > 0 && designerName.length >0) {
            const invoice = {
                theme: getData,//----
                menu: fullMenu,//---
                venu, //---
                price: venuPrice + (menuPrice * people),
                eventName: getData.toLowerCase(), //----
                isPackage: false,
                serPackName: 'custom',
                serPackId: 'no id', // there will be no service id so setting it to 'no id';
                userEmail: email,
                bookDate: new Date().toString(),
                occuredDate: new Date(occuredDate).toString(), //---
                designerName, //---
                noOfPeople: people, //---
                status: 'inprogress'
            }
            firebase.database().ref('pendingInvoices/').push(invoice).then((data) => {
                //success callback
                dispatch(addPendingInvoice({ ...invoice, id: data.key }))
                alert('Successfully added to Invoices', 'Please go to invoice section to clear first and continue.', [{ text: 'Ok' }])
            }).catch((error) => {
                //error callback
                alert("Can't book package.", 'Please check your internet connection!', [{ text: 'OK', style: 'destructive' }])
            })
            setMenuPrice(0)
            setVenuPrice(0)
            setVenu('')
            setPrice('')
            setPeople(20)
            setOpen(false);
        }
        else {
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
        <>
        {/* {console.log(`Designer: ${designerName} Date: ${occuredDate} `)} */}
            {/* <Button variant="outlined" color="secondary" >Add Package</Button> */}
            <button type="button" className={props.clsName} onClick={handleClickOpen('paper')}>Customize Package</button>
            {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                style={{ width: "100%", margin: "0 auto", height: "96%" }}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Package Details ... <span className="prc">Rs: {venuPrice + (menuPrice * people)}</span></DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <h5 style={{ textAlign: 'center', color: 'red' }}>{checkValid}</h5>
                        <Formtemp setVenuPrice={setVenuPrice} setOccuredDate={setOccuredDate} setMenuPrice={setMenuPrice} Items={props.Items} setDesignerName={setDesignerName} getData={props.getData} data={data} setPeople={setPeople} menu={menu} venu={venu} price={price} people={people} setVenu={setVenu} setMenu={setMenu} setPrice={setPrice} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setOpen(false); setValid(""); }} style={{ fontSize: '14px' }} color="primary">
                        Cancel
                     </Button>
                    <Button onClick={handleClose} style={{ fontSize: '14px' }} color="primary">
                        Submit
                     </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
