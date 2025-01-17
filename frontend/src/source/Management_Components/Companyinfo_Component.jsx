import React from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import { Box, Typography, Paper, Grid, TextField, Button } from '@mui/material';
import ActionButtons from '../Management_Components/ActionButtons';

const Companyinfo_Component = () => {
    const companyInfo = {
        name: "Example Corp",
        address: "123 Example Street, City, Country",
        phone: "123-456-7890",
        industry: "Technology",
        description: "Example Corp is a leading technology company specializing in software development and IT solutions."
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Management_DrawerComponent />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Management_Header />
                <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
                    Company Information
                </Typography>
                <Paper sx={{ p: 2, backgroundColor: 'grey.100' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                variant="outlined"
                                value={companyInfo.name}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Address"
                                variant="outlined"
                                value={companyInfo.address}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                                value={companyInfo.phone}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Industry"
                                variant="outlined"
                                value={companyInfo.industry}
                                margin="normal"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Company Description"
                                variant="outlined"
                                value={companyInfo.description}
                                margin="normal"
                                multiline
                                minRows={4}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
                <ActionButtons
                    onSave={() => console.log("Saving changes...")}
                    onCancel={() => console.log("Cancelling changes...")}
                />
            </Box>
        </Box>
    );
};

export default Companyinfo_Component;
