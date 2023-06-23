import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const  CenteredTabs =({value,setValue}) => {
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="History" />
        <Tab label="Requirment" />
        <Tab label="About Us" />
      </Tabs>
    </Box>
  );
}

export default CenteredTabs