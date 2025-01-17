import React from 'react';
import {Box, CssBaseline, Toolbar, Typography, Avatar, Grid, TextField, Button, Paper, MenuItem, FormControl, Select, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import Management_LeadersList from '../Management_Components/Management_LeadersList';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import ActionButtons from '../Management_Components/ActionButtons';
import Employee_Component from '../Management_Components/Employee_Component';

const drawerWidth = 240;

const Management = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Management_Header />
            <Management_DrawerComponent />
            <Employee_Component />
        </Box>
    );
};

export default Management;
