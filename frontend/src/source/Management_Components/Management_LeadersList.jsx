import React from 'react';
import { Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Management_LeadersList = () => {
    const leaders = [
        { role: 'HR', name: 'Kate Middleton' },
        { role: 'Manager', name: 'Kirk Mitrohin' },
        { role: 'Lead', name: 'Eugene Hummell' },
        { role: 'Employee', name: 'John Doe' }
    ];

    return (
        <Paper sx={{ margin: 2, padding: 2, backgroundColor: 'grey.100' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Company's Leaders</Typography>
            <List>
                {leaders.map((leader, index) => (
                    <ListItem key={index} sx={{ padding: '10px', alignItems: 'flex-start' }}>
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={leader.role}
                            secondary={leader.name}
                            primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold' }}
                            secondaryTypographyProps={{ variant: 'body2' }}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default Management_LeadersList;
