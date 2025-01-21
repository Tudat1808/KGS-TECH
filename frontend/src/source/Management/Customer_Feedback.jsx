import React from 'react';
import {Box, CssBaseline } from '@mui/material';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import CustomerFeedback_Component from '../Management_Components/CustomerFeedback_Component';

const drawerWidth = 240;

const Customer_Feedback = () => {
    
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Management_Header />
            <Management_DrawerComponent />
            <CustomerFeedback_Component/>
        </Box>
    );
};

export default Customer_Feedback;