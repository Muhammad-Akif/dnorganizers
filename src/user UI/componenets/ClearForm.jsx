import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch} from 'react-redux';
import { updatePendingInvoices } from '../../redux/actions';
import firebase from '../../config/firebase'

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 300,
        paddingBottom: theme.spacing(1.5),
    }
}));

export default function FormDialog(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [address, setAddress] = useState('');
    const [code, setCode] = useState('');
    const [date, setDate] = useState('');
    const [checkValid, setValid] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setAddress('')
        setCode('')
        setDate('')
        setOpen(false);
    }
    const handleSubmit = () => {
        if (address.length > 0 && code.length > 0 && date.length > 0) {
            const dataObj = {
                address,
                code,
                date
            }
            const userClear = {
                invoiceData: props.obj,
                date: date.toString(),
                branchCode: code,
                bankAddress: address,
                pendingInvoiceId: props.obj.id,
                userEmail: localStorage.getItem('user')
            }
            console.log("userClear ===> ", userClear)
            firebase.database().ref(`pendingInvoices/${props.obj.id}`).update({
                status: 'userclear'
            }).then((response) => {
                console.log('asdasdasd')
                firebase.database().ref('userClear/').push(userClear).then((data) => {
                    //success callback
                    // dispatch(addPendingInvoice({ ...invoice, id: data.key }))
                    dispatch(updatePendingInvoices(props.obj.id, { status: 'userclear' }))
                    // Alert.alert('Successfully added to Invoices', 'Please go to invoice section to clear first and continue.', [{ text: 'Ok' }])
                }).catch((error) => {
                    //error callback
                    alert("Something went wrong.")
                })
            }).catch((error) => {
                alert("Something went wrong. !!")
                console.log(error)
            });
            setAddress('')
            setCode('')
            setDate('')
            setOpen(false);
        }
        else {
            setValid("Incomplete Information ...")
        }
    };

    return (
        <>
            <button className="btn Cbtn Ebtn btn-wdh" onClick={handleClickOpen}>
                Clear
      </button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <h5 style={{ textAlign: 'center', color: 'red' }}>{checkValid}</h5>
                <DialogTitle id="form-dialog-title">Enter Paid Invoice Details ...!</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        className={classes.textField}
                        id="name"
                        label="Bank Address"
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        value={address}
                        fullWidth
                        required
                    />
                    <br />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        onChange={(e) => setCode(e.target.value)}
                        value={code}
                        label="Branch Code"
                        className={classes.textField}
                        type="number"
                        fullWidth
                        required
                    />
                    <br />
                    <TextField
                        id="date"
                        label="Paid Date"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        fullWidth
                        className={classes.textField}
                        required
                        defaultValue="2021-04-04"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                     </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}





{/* <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          <span className={classes.theme}><h3 style={{ fontFamily: "serif,'Sacramento', Arial", color: "grey" }}>{obj.theme}</h3></span>
          <h5 style={{ fontFamily: "serif,'Sacramento', Arial", color: "grey" }}>Venu: {obj.venu}</h5>
          <br />
          <h5 style={{ fontFamily: "serif,'Sacramento', Arial", color: "grey", marginTop: "-15px" }}>Designer: {obj.designerName}</h5>
          <br />
          <h5 style={{ fontFamily: "serif,'Sacramento', Arial", color: "grey", marginTop: "-15px" }}>{obj.noOfPeople} Peoples</h5>
          <span className={classes.people}><h5 id="status-info" style={{ fontFamily: "serif,'Sacramento', Arial", color: "orange", marginTop: "-50px", border: "2px solid orange", padding: "5px" }}> {obj.status.toUpperCase()} </h5></span>
        </Typography> */}



    //     <div className="text-center">
    //     <strong style={{ fontSize: '5rem', color: "#F14E95", fontFamily: "'Sacramento', Arial, serif" }}> Invoices </strong>
    //   </div>
    //   <div className="container" style={{ fontSize: '2rem', color: "grey", fontFamily: "serif,Arial" }}>
    //     <div className="row" >
    //       <div className="col-md-8 .col-lg-8 .col-xl-8 col-sm-6 col-12">
    //         <div className='bank-info'>
    //           <img src={logo} width="100px" alt="Bank-Logo" />
    //           <br />
    //           Acceptable at any Askari Bank Branch - ACMS
    //         </div>
    //       </div>
    //       <div className="col-md-4 .col-lg-4 .col-xl-4 col-sm-6 col-12">
    //         Challan No. 75058
    //         <br />
    //         Bank Account: 37405-5668619-7
    //         <br />
    //         Date: {newdate}
    //       </div>
    //     </div>
    //   </div>


    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       width: '95%',
    //       backgroundColor: "#fff",
    //       margin: '10px auto',
    //     },
    //     paper: {
    //       width: '100%',
    //       boxShadow: "0 8px 40px -12px rgba(0,0,0,0.6)",
    //       marginBottom: theme.spacing(2),
    //     },
    //     table: {
    //       minWidth: 50,
    //     },
    //     visuallyHidden: {
    //       border: 0,
    //       clip: 'rect(0 0 0 0)',
    //       height: 1,
    //       margin: -1,
    //       overflow: 'hidden',
    //       padding: 0,
    //       position: 'absolute',
    //       top: 20,
    //       width: 1,
    //     },
    //     price: {
    //       display: 'flex',
    //       justifyContent: 'flex-end',
    //       alignItems: 'flex-end',
    //       padding: '0px 10px',
    //     }
    //   }));




    // const useToolbarStyles = makeStyles((theme) => ({
    //     root: {
    //       paddingLeft: theme.spacing(2),
    //       paddingRight: theme.spacing(1),
    //     },
    //     highlight:
    //       theme.palette.type === 'light'
    //         ? {
    //           color: theme.palette.secondary.main,
    //           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
    //         }
    //         : {
    //           color: theme.palette.text.primary,
    //           backgroundColor: theme.palette.secondary.dark,
    //         },
    //     title: {
    //       flex: '1 1 100%',
    //     },
    //     theme: {
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       padding: '10px 0px',
    //     },
    //     people: {
    //       display: 'flex',
    //       justifyContent: 'flex-end',
    //       alignItems: 'flex-end',
    //       // padding: '10px 0px',
    //     }
    //   }));