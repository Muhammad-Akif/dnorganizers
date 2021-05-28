import React, { useState } from 'react';
import firebase from '../../../config/firebase';
import Formtemp from './Form'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../../Models/models/item';
import { addPendingInvoices } from '../../../redux/actions';
import uploadToFirebase from '../../../functions/uploadToFirebase';

export default function Modal(props) {
    const getData = props.getData.toLowerCase();
    const [name, setName] = useState('')
    const [people, setPeople] = useState(20)
    const [venu, setVenu] = useState('')
    const [venuPrice, setVenuPrice] = useState(0);
    const [data, setData] = useState([])
    const [designerName, setDesignerName] = useState('')
    // const [name, setName] = useState('')

    const [checkValid, setValid] = useState('')
    const [menu, setMenu] = useState([]) //[{id, name, price}, .....] //checked data of table

    const [menuPrice, setMenuPrice] = useState(0);

    const [prices, setPrices] = useState('')
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
                let { name, price } = items[key]
                list.push(new Item(key, name, price))
            }
            setData(list)
        });
        setOpen(true);
        setScroll(scrollType);
    };

    const email = useSelector(state => state.auth.email)

    const setState = () => {
        setMenuPrice(0)
        setVenuPrice(0)
        setVenu('')
        setPrices('')
        setPeople(20)
        setName('')
        setOpen(false);
        setMenu([]);
    }
    const handleClose = () => {
        //here we are submitting to firebase;
        // props.getData //differentiating what event package we are getting
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
        if (name.length > 0 && venu.length > 0 && menu.length > 0 && occuredDate.length > 0 && people > 0 && designerName.length >0) {
            const pushData = {
                name,
                noOfPeople: people,
                price: prices,
                occuredDate: new Date(occuredDate).toString(),
                venu,
                designerName,
                menu: fullMenu,
                theme: 'birthday'
            }
            console.log("Submit Object", pushData)
            console.log("full menu", fullMenu)
            if (props.getData == "Wedding") {
                uploadToFirebase(
                    'events/wedding/packages/',
                    pushData,
                    'Package Added successfully!',
                    'Everyone can see this package and approach.',
                    'Something Went Wrong!',
                    'Please check your network.',
                    dispatch,
                    'addPackage'
                )
            } else if (props.getData == 'Corporate') {
                uploadToFirebase(
                    'events/corporate/packages/',
                    pushData,
                    'Package Added successfully!',
                    'Everyone can see this package and approach.',
                    'Something Went Wrong!',
                    'Please check your network.',
                    dispatch,
                    'corAddPackage'
                )
            } else if (props.getData == 'Birthday') {
                uploadToFirebase(
                    'events/birthday/packages/',
                    pushData,
                    'Package Added successfully!',
                    'Everyone can see this package and approach.',
                    'Something Went Wrong!',
                    'Please check your network.',
                    dispatch,
                    'birAddPackage'
                )
            }

            setState();
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
            <Button variant="outlined" color="secondary" style={{ marginBottom: "10px", padding: "10px 50px", fontSize: "12px" }} onClick={handleClickOpen('paper')}>Add Package</Button>
            {/* <button type="button" className={props.clsName} onClick={handleClickOpen('paper')}>Customize Package</button> */}
            {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                style={{ width: "100%", margin: "0 auto", height: "96%" }}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Package Details ... </DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <h5 style={{ textAlign: 'center', color: 'red' }}>{checkValid}</h5>
                        {/* {console.log("gogopanmasla ==> ",props?.Items[2])} */}
                        <Formtemp name={name} designerName={designerName} setName={setName} setVenuPrice={setVenuPrice} setOccuredDate={setOccuredDate} setMenuPrice={setMenuPrice} Items={props?.Items[2]?.venu} setDesignerName={setDesignerName} getData={props.getData} data={data} setPeople={setPeople} menu={menu} venu={venu} prices={prices} people={people} setVenu={setVenu} setMenu={setMenu} setPrices={setPrices} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setOpen(false); setValid(""); setState(); }} style={{ fontSize: '14px' }} color="primary">
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








































// import React, { useState } from 'react';
// import firebase from '../../../config/firebase';
// import Formtemp from './Form'
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// export default function Modal(props) {
//     const getData = props.getData.toLowerCase();
//     const updateTable = props.updateTable
//     const [name, setName] = useState('')
//     const [people, setPeople] = useState('')
//     const [date, setDate] = useState('')
//     const [venu, setVenu] = useState('')
//     const [checkValid, setValid] = useState('')
//     const [menu, setMenu] = useState([])
//     const [price, setPrice] = useState(0)
//     const [open, setOpen] = React.useState(false);
//     const [scroll, setScroll] = React.useState('paper');
//     const [data, setData] = useState([]);
//     const [menuPrice, setMenuPrice] = useState(0);


//     const handleClickOpen = (scrollType) => () => {
//         firebase.database().ref(`/events/${getData}/items/menu`).on('value', function (snapshot) {
//             let items = snapshot.val()
//             const list = []
//             for (let item in items) {
//                 let itemName = items[item].name
//                 list.push(itemName)
//             }
//             setData(list)
//         });
//         setOpen(true);
//         setScroll(scrollType);
//     };

//     const handleClose = () => {
//         setValid("")
//         console.log('date---------',new Date(date).toString())
//         const datee = new Date(date).toString();
//         if(name.length > 0 && price.length > 1 && venu.length > 0 && date.toString().length > 0 && menu.length > 0) {
//             const item = {
//                 name,
//                 price,
//                 people,
//                 date: datee,
//                 theme: props.getData,
//                 venu,
//                 menu
//             }
//             console.log("Submit Data: ", item)
//             // firebase.database().ref(`/events/${getData}/packages`).push(item);
//             // updateTable("updated")
//             setOpen(false);
//             setName('');
//             setVenu('');
//             setPrice(0);
//             setPeople('');
//             setDate('');
//             setMenu([]);
//         }
//         else{
//             setValid("Incomplete Package Information ...")
//         }

//     };


//     const descriptionElementRef = React.useRef(null);
//     React.useEffect(() => {
//         if (open) {
//             const { current: descriptionElement } = descriptionElementRef;
//             if (descriptionElement !== null) {
//                 descriptionElement.focus();
//             }
//         }
//     }, [open]);

//     return (
//         <div>
//             {console.log("menu ====> ",data)}
//             <Button variant="outlined" color="secondary" style={{marginBottom:"10px",padding:"10px 50px",fontSize:"12px"}} onClick={handleClickOpen('paper')}>Add Package</Button>
//             {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
//             <Dialog
//                 open={open}
//                 onClose={handleClose}
//                 scroll={scroll}
//                 style={{width: "100%",margin: "0 auto",height: "96%"}}
//                 aria-labelledby="scroll-dialog-title"
//                 aria-describedby="scroll-dialog-description"
//             >
//                 <DialogTitle id="scroll-dialog-title">Add Package Details ...</DialogTitle>
//                 <DialogContent dividers={scroll === 'paper'}>
//                     <DialogContentText
//                         id="scroll-dialog-description"
//                         ref={descriptionElementRef}
//                         tabIndex={-1}
//                     >
//                         <h5 style={{textAlign: 'center',color: 'red'}}>{checkValid}</h5>
//                         <Formtemp getData={props.getData} date={date} setDate={setDate} menuPrice={menuPrice} setMenuPrice={setMenuPrice} people={people} setPeople={setPeople} data={data}  name={name} menu={menu} venu={venu} price={price} setName={setName} setVenu={setVenu} setMenu={setMenu} setPrice={setPrice} />
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => { setOpen(false);setValid(""); }} style={{ fontSize: '14px' }} color="primary">
//                         Cancel
//                      </Button>
//                     <Button onClick={handleClose} style={{ fontSize: '14px' }} color="primary">
//                         Submit
//                      </Button>
//                 </DialogActions>
//             </Dialog>
//         </div>
//     );
// }
