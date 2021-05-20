import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserCard from './componenets/UserCard'
import ModalCustom from './componenets/ModalCustom'

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      style={{ color: "black" }}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexWrap: 'break',
    // height: '85vh',
    padding: '0px',
    margin: '0px'
  },
  tabs: {
    width: '13vw',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  TabPanel: {
    width: '87vw'
  }
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { weddingPkg, birthdayPkg, corporatePkg } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab style={{ fontSize: "12px", color: 'black', padding: '52% 0%' }} label="Wedding" {...a11yProps(0)} />
        <Tab style={{ fontSize: "12px", color: 'black', padding: '52% 0%' }} label="Birthday" {...a11yProps(1)} />
        <Tab style={{ fontSize: "12px", color: 'black', padding: '52% 0%' }} label="Corporate" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} className={classes.TabPanel} index={0}>
          <ModalCustom getData="wedding"/>
        <div className='userCards'>
          <br />
          {
            weddingPkg.map((v) => {
              return (
                <UserCard {...v} type={'wedding'} />
              )
            })
          }
        </div>
      </TabPanel>
      <TabPanel value={value} className={classes.TabPanel} index={1}>
        <ModalCustom getData="birthday"/>
        <div className='userCards'>
          {
            birthdayPkg.map((v) => {
              return (
                <UserCard {...v} type={'birthday'} />
              )
            })
          }
        </div>
      </TabPanel>
      <TabPanel value={value} className={classes.TabPanel} index={2}>
        <ModalCustom getData="corporate"/>
        <div className='userCards'>
          {
            corporatePkg.map((v) => {
              return (
                <UserCard {...v} type={'corporate'} />
              )
            })
          }
        </div>
      </TabPanel>
    </div>
  );
}

// boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
// "&:hover": {
//   boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
// }