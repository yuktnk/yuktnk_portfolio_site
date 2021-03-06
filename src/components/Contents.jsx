import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../assets/styles/style.css';

// 使用するコンポーネントをインポート
import { About, Skills, Works, Photos, Contact, Profile, Footer } from './index'

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
    width: "95%",
    marginTop: 400,
  },
  navBtn :{
    textTransform: "none",
    fontFamily: "Roboto Slab, Times New Roman, serif",
  }
}));

const SimpleTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="main-container">
      <div className="main-content">
        <Profile />
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
              <Tab label="About" {...a11yProps(0)} className={classes.navBtn} />
              <Tab label="Skills" {...a11yProps(1)} className={classes.navBtn} />
              <Tab label="Works" {...a11yProps(2)} className={classes.navBtn} />
              <Tab label="Photos" {...a11yProps(3)} className={classes.navBtn} />
              <Tab label="Contact" {...a11yProps(4)} className={classes.navBtn} />
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
        <Footer />
      </div>
    </div>
  );
}

export default SimpleTabs