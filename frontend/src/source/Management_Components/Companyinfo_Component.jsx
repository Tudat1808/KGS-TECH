import React from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import { Box, Typography, Paper, Grid, TextField, IconButton, InputAdornment } from '@mui/material';
import ActionButtons from '../Management_Components/ActionButtons';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
                <Typography variant="h4" sx={{ mt: 8, mb: 2, ml: -30 }}>
                    Company Information
                </Typography>
                <Paper sx={{ p: 2, backgroundColor: 'grey.100', width:'120%', ml: -30 }}>
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
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => console.log("Editing Company Name")}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => console.log("Deleting Company Name")}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
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
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => console.log("Editing Address")}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => console.log("Deleting Address")}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
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
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => console.log("Editing Phone Number")}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => console.log("Deleting Phone Number")}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
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
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => console.log("Editing Industry")}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => console.log("Deleting Industry")}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
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
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => console.log("Editing Company Description")}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => console.log("Deleting Company Description")}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
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
