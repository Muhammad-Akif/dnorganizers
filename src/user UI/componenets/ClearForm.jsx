import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
      textField: {
        width: 300,
        paddingBottom: theme.spacing(1.5),
      }
  }));

export default function FormDialog() {
  const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [address,setAddress] = useState('');
    const [code,setCode] = useState('');
    const [date,setDate] = useState('');
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
        if(address.length > 0 && code.length > 0 && date.length > 0) {
            const dataObj = {
                address,
                code,
                date
            }
            console.log(dataObj)
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
