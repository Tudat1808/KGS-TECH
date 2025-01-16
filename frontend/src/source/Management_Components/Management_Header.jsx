import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Management_ProfileAvatar from './Management_ProfileAvatar';

const drawerWidth = 240;

const Management_Header = () => {
    return (
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    KGS-TECH Management
                </Typography>
                <Management_ProfileAvatar sx={{ width: 50, height: 50 }} />
            </Toolbar>
        </AppBar>
    );
};

export default Management_Header;
