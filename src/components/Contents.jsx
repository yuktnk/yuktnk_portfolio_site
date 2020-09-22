import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../assets/styles/style.css'

// 各ページをインポート
import { About, Skills, Works, Photos, Contact } from './index'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    height: "100%",
    margin: 32,
    boxShadow: "0 2px 5px rgba(0,0,0,0.26)"
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Skills" {...a11yProps(1)} />
          <Tab label="Works" {...a11yProps(2)} />
          <Tab label="Photos" {...a11yProps(3)} />
          <Tab label="Contact" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className="Content">
        <About />
      </TabPanel>
      <TabPanel value={value} index={1} className="Content">
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={2} className="Content">
        <Works />
      </TabPanel>
      <TabPanel value={value} index={3} className="Content">
        <Photos />
      </TabPanel>
      <TabPanel value={value} index={4} className="Content">
        <Contact />
      </TabPanel>
    </div>
  );
}