import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DesignerGallery from "./DesignerGallery"
import DesignerRatings from "../../components/View Details/FeedbackRating"
import DesignerCards from "./DesignerCards"
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const d = props.designerDetails;
  console.log("designerDetails ===> ", props)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <button className="DesignerBtn" onClick={handleClickOpen}>{props.title === "profile" ? "View Profile" : "View Details"}</button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        {props.title === "profile" ?
          <DialogContent>
            <DialogContentText>
              <div className='row' style={{ marginTop: '10px' }}>
                <div className='col-md-12'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-contnt'>
                      <p>"{d.text}"</p>
                      <DesignerRatings pkgDesigner={d.name} />
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContentText>
            <DesignerGallery Gallery={d.gallery} />
          </DialogContent>
          :
          <>
            <DialogContent style={{paddingTop:"5%"}}>
              <DesignerCards Gallery={d.gallery} />
            </DialogContent>
          </>}
        <DialogActions>
          <Button onClick={handleClose} style={{ fontSize: "12px" }} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
