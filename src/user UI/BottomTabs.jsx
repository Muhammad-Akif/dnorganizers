import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CakeIcon from '@material-ui/icons/Cake';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import UserCard from './componenets/UserCard'

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ overflowY: 'scroll', height: '77vh' }}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '960px',
    width: '100%',
    overflowY: 'hidden',
    position: 'absolute',
    bottom: "0px",
    left: "0px",
    right: "0px",
  },
});

export default function IconLabelTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const {weddingPkg,birthdayPkg,corporatePkg} = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <TabPanel value={value} index={0}>
        <div className='userCards'>
          <button type="button" className="btn Cbtn btn-wdth" >Customize Package</button>
        {
            weddingPkg.map((v)=>{
              return(
                <UserCard {...v}/>
              )
            })
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='userCards'>
          <button type="button" className="btn Cbtn btn-wdth">Customize Package</button>
        {
            birthdayPkg.map((v)=>{
              return(
                <UserCard {...v}/>
              )
            })
          }
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='userCards'>
        <button type="button" className="btn Cbtn btn-wdth">Customize Package</button>
        {
            corporatePkg.map((v)=>{
              return(
                <UserCard {...v}/>
              )
            })
          }
        </div>
      </TabPanel>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<FavoriteIcon />} label="WEDDING" {...a11yProps(0)} />
        <Tab icon={<CakeIcon />} label="BIRTHDAY" {...a11yProps(1)} />
        <Tab icon={<ThumbUpIcon />} label="CORPORATE" {...a11yProps(2)} />
      </Tabs>
    </Paper>
  );
}
