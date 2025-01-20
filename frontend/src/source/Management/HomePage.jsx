import React from 'react';
import {Box, CssBaseline } from '@mui/material';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import Employee_Component from '../Management_Components/Employee_Component';

const drawerWidth = 240;

const HomePage = () => {
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Management_Header />
            <Management_DrawerComponent />
            <Employee_Component/>
        </Box>
    );
};

export default HomePage;