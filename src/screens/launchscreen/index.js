import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import tabData from "./data";



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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function LaunchScreen() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue,event)
    setValue(newValue);
  };



  return (
    <div >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',display: "flex", justifyContent: "center", width: "100%" }}>
          <Tabs 
          value={value}
          // style={{background:"green"}}
          onChange={handleChange} 
          // centered 
          aria-label="basic tabs example"
          scrollButtons={"auto"}
          labelContainer={{fontSize:12}}
          variant="scrollable"
          allowScrollButtonsMobile= {"auto"}
          // textColor="rgb(8,8,8)"
          // indicatorColor="#E18F68"
          // inkBarStyle={{background: 'red'}}
          TabIndicatorProps={{style:{backgroundColor: tabData[value].tabColor}}}
          >
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===0)?tabData[value].tabColor:"grey"}} label={tabData[0].name} {...a11yProps(0)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===1)?tabData[value].tabColor:"grey"}} label={tabData[1].name} {...a11yProps(1)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===2)?tabData[value].tabColor:"grey"}} label={tabData[2].name} {...a11yProps(2)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===3)?tabData[value].tabColor:"grey"}} label={tabData[3].name} {...a11yProps(3)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===4)?tabData[value].tabColor:"grey"}} label={tabData[4].name} {...a11yProps(4)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===5)?tabData[value].tabColor:"grey"}} label={tabData[5].name} {...a11yProps(5)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===6)?tabData[value].tabColor:"grey"}} label={tabData[6].name} {...a11yProps(6)} />
            <Tab style={{fontFamily:"cursive",fontSize: 20,color:(value===7)?tabData[value].tabColor:"grey"}} label={tabData[7].name} {...a11yProps(7)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {tabData[0].content}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {tabData[1].content}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {tabData[2].content}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {tabData[3].content}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {tabData[4].content}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {tabData[5].content}
        </TabPanel>
        <TabPanel value={value} index={6}>
          {tabData[6].content}
        </TabPanel>
        <TabPanel value={value} index={7}>
          {tabData[7].content}
        </TabPanel>
      </Box>
    </div>
  );
}

export default LaunchScreen;
