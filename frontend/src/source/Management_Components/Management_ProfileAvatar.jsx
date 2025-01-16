import React, { useState } from 'react';
import { Avatar, Button, Popover, Box, IconButton, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Management_ProfileAvatar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationAnchorEl(null);
    };

    const avatarOpen = Boolean(anchorEl);
    const notificationOpen = Boolean(notificationAnchorEl);
    const avatarId = avatarOpen ? 'avatar-popover' : undefined;
    const notificationId = notificationOpen ? 'notification-popover' : undefined;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <IconButton color="inherit" onClick={handleNotificationClick} aria-label="notifications">
                <NotificationsIcon />
            </IconButton>
            <Popover
                id={notificationId}
                open={notificationOpen}
                anchorEl={notificationAnchorEl}
                onClose={handleNotificationClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box sx={{ p: 1 }}>
                    <Typography sx={{ p: 1, fontStyle: 'italic', color: 'gray', fontSize: '0.875rem' }}>No new notifications</Typography>
                </Box>
            </Popover>
            <Avatar
                src="https://mui.com/static/images/avatar/1.jpg"
                sx={{ width: 50, height: 50, marginLeft: 2 }}
                aria-describedby={avatarId}
                onClick={handleAvatarClick}
            />
            <Popover
                id={avatarId}
                open={avatarOpen}
                anchorEl={anchorEl}
                onClose={handleAvatarClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Button sx={{ display: 'block', width: '100%', mb: 1 }} onClick={handleAvatarClose}>Manage Profile</Button>
                    <Button sx={{ display: 'block', width: '100%' }} onClick={handleAvatarClose}>Logout</Button>
                </Box>
            </Popover>
        </Box>
    );
};

export default Management_ProfileAvatar;
