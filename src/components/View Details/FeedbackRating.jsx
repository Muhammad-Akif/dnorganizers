import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function FeedbackRating() {
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating style={{display: 'flex',justifyContent: 'center'}} name="read-only" value={value} readOnly />
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



