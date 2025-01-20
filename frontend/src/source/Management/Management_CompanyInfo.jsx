import React from 'react';
import {Box, CssBaseline } from '@mui/material';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import Companyinfo_Component from '../Management_Components/Companyinfo_Component';

const drawerWidth = 240;

const Management_CompanyInfo = () => {
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Management_Header />
            <Management_DrawerComponent />
            <Companyinfo_Component />
        </Box>
    );
};

export default Management_CompanyInfo;
