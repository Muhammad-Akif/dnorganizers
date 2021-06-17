import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

export default function FeedbackRating(props) {
  const [value, setValue] = React.useState(5);
  // if(props.rate){
  //   setValue(props.rate)
  // }  
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating style={{display: 'flex',justifyContent: props.pkgDesigner ? 'flex-start' : 'center'}} name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}

export function Review(props) {
  const [value, setValue] = React.useState(props.rate);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating style={{display: 'flex',justifyContent:'center'}} name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
}

export function DesignerRatings() {
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent" style={{display: 'flex'}}>
        <Rating style={{display: 'flex',justifyContent: 'flex-start'}} name="read-only" value={value} readOnly />
        <span style={{fontSize:"11px"}}> (5.0)</span>
      </Box>
    </div>
  );
}




const labels = {  
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    marginTop: "-22px",
    flexDirection:"column",
    alignItems: 'center',
  },
});

export function HoverRating(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  const {getRatings} = props;
  return (
    <div className={classes.root}>
    {value !== null && <Box style={{color:"#ffb400",fontWeight:"bold"}}>{labels[hover !== -1 ? hover : value]}</Box>}
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        style={{fontSize:"24px"}}
        
        onChange={(event, newValue) => {
          setValue(newValue);
          getRatings(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </div>
  );
}



