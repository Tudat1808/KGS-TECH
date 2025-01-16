import React from 'react';
import {Box, CssBaseline, Toolbar, Typography, Avatar, Grid, TextField, Button, Paper, MenuItem, FormControl, Select, InputLabel, Checkbox, FormControlLabel } from '@mui/material';
import Management_LeadersList from '../Management_Components/Management_LeadersList';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import ActionButtons from '../Management_Components/ActionButtons';

const drawerWidth = 240;

const Management = () => {
    // State for form fields and selections
    const [employee, setEmployee] = React.useState({
        firstName: 'Russel',
        lastName: 'Sims',
        email: 'russel@mycompany.com',
        phone: '+1 255 29345690',
        position: 'iOS Developer',
        role: 'Employee',
        team: 'HR',
        onboardingStart: '2025-01-01',
        onboardingDetails: {
            officeTour: true,
            managementIntro: false,
            workTools: false,
            colleagues: false,
            journal: false,
            requests: false,
            tracking: false
        }
    });

    // Handle input change
    const handleChange = (prop) => (event) => {
        setEmployee({ ...employee, [prop]: event.target.value });
    };

    // Handle checkbox change for onboarding tasks
    const handleCheckboxChange = (prop) => (event) => {
        setEmployee({ ...employee, onboardingDetails: { ...employee.onboardingDetails, [prop]: event.target.checked } });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Management_Header />
            <Management_DrawerComponent />
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, mb: 2 }} />
                            <Button variant="outlined">Change Profile Image</Button>
                        </Paper>
                        <Management_LeadersList/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Paper sx={{ p: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        variant="outlined"
                                        value={employee.firstName}
                                        onChange={handleChange('firstName')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        variant="outlined"
                                        value={employee.lastName}
                                        onChange={handleChange('lastName')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        value={employee.email}
                                        onChange={handleChange('email')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        variant="outlined"
                                        value={employee.phone}
                                        onChange={handleChange('phone')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Position"
                                        variant="outlined"
                                        value={employee.position}
                                        onChange={handleChange('position')}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Role</InputLabel>
                                        <Select
                                            value={employee.role}
                                            label="Role"
                                            onChange={handleChange('role')}
                                        >
                                            <MenuItem value="Master">Master</MenuItem>
                                            <MenuItem value="Employee">Employee</MenuItem>
                                            <MenuItem value="Manager">Manager</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Team</InputLabel>
                                        <Select
                                            value={employee.team}
                                            label="Team"
                                            onChange={handleChange('team')}
                                        >
                                            <MenuItem value="HR">HR</MenuItem>
                                            <MenuItem value="Engineering">Engineering</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                  <Paper sx={{ p: 2}}>
                                    <Typography variant="h6">Onboarding</Typography>
                                    <TextField
                                        label="Starts on"
                                        type="date"
                                        sx={{ mt: 2, mb: 2 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={employee.onboardingStart}
                                        onChange={handleChange('onboardingStart')}
                                    />
                                  </Paper>
                                    <FormControlLabel
                                        control={<Checkbox checked={employee.onboardingDetails.officeTour} onChange={handleCheckboxChange('officeTour')} />}
                                        label="Office Tour"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={employee.onboardingDetails.managementIntro} onChange={handleCheckboxChange('managementIntro')} />}
                                        label="Management Introductory"
                                    />
                                    {/* Add more checkboxes for other onboarding steps */}
                                </Grid>
                            </Grid>
                            <ActionButtons
                                onSave={() => console.log("Saving data...")}
                                onCancel={() => console.log("Cancelling...")}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Management;
