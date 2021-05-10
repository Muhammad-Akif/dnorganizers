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
    Height: '100%',
    overflowY: 'hidden',
    position: 'absolute',
    bottom: 0,
    top: 100,
    left: 0,
    right: 0,
  },
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <TabPanel value={value} index={0}>
        <div className='userCards'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <button type="button" className="btn btn-danger" style={{ margin: "0 auto" }}>Customize Package</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='userCards'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <button type="button" className="btn btn-danger" style={{ margin: "0 auto" }}>Customize Package</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='userCards'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <button type="button" className="btn btn-danger" style={{ margin: "0 auto" }}>Customize Package</button>
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
