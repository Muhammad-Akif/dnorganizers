import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteMenuVenu from "./DeleteMenuVenu"

const useStyles = makeStyles((theme) =>
    ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function ColorTextFields(props) {
    const classes = useStyles();

    return (
        <>
        <h3 style={{fontFamily: "serif,'Sacramento', Arial"}} color="secondary">ADD {props.title.toUpperCase()}</h3>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                // autoFocus
                margin="dense"
                id="name"
                label="Name"
                style={{ width: "25vw" }}
                type="text"
                color="secondary"
                fullWidth
            />
            <TextField
                // autoFocus
                margin="dense"
                style={{ width: "25vw" }}
                id="name"
                label="Price"
                color="secondary"
                type="number"
                fullWidth
            />
            <Button variant="outlined" color="secondary" style={{ padding: "8px", fontSize: "12px"}}>
                Add Menu
            </Button>
        </form>
        <DeleteMenuVenu/>
        </>
    );
}
