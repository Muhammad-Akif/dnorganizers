import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Reviews from "./Reviews";
import ViewCv from "./viewCv"
import GetTouch from "./getTouch"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ViewTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"transparent",boxShadow:"none"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          // indicatorColor="primary"
          textColor="danger"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab style={{fontSize: "13px",fontFamily:"book",fontWeight:"bold"}} label="Reviews" {...a11yProps(0)} />
          <Tab style={{fontSize: "13px",fontFamily:"book",fontWeight:"bold"}} label="Get-Touch" {...a11yProps(1)} />
          <Tab style={{fontSize: "13px",fontFamily:"book",fontWeight:"bold"}} label="View-Cv's" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} style={{backgroundColor:"transparent",boxShadow:"none"}} index={0}>
        <Reviews/>
      </TabPanel>
      <TabPanel value={value} style={{backgroundColor:"transparent",boxShadow:"none"}}  index={1}>
        <GetTouch/>
      </TabPanel>
      <TabPanel value={value} style={{backgroundColor:"transparent",boxShadow:"none"}}  index={2}>
        <ViewCv/>
      </TabPanel>
    </div>
  );
}
