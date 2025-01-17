import React from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Select, MenuItem, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ActionButtons from '../Management_Components/ActionButtons';


const Employee = () => {
    const users = [
        { id: 1, username: "user1", email: "user1@example.com", phone: "1234567890", updatedAt: "2022-01-01", gender: "male", status: "Active" },
        { id: 2, username: "user2", email: "user2@example.com", phone: "0987654321", updatedAt: "2022-01-02", gender: "female", status: "Inactive" },
        // Thêm các users khác
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Management_DrawerComponent />
            <Box sx={{ flexGrow: 1, p: 3 }}>
                <Management_Header />
                <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
                    User Management
                </Typography>
                <TableContainer component={Paper} sx={{ backgroundColor: 'grey.100' }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Updated At</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.updatedAt}</TableCell>
                                    <TableCell>
                                        <Select
                                            value={user.gender}
                                            onChange={(event) => console.log(`Gender for user ${user.id} changed to ${event.target.value}`)}
                                            displayEmpty
                                        >
                                            <MenuItem value="male">Male</MenuItem>
                                            <MenuItem value="female">Female</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </Select>
                                    </TableCell>
                                    <TableCell>{user.status}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => console.log(`Editing user ${user.id}`)}><EditIcon /></IconButton>
                                        <IconButton onClick={() => console.log(`Deleting user ${user.id}`)}><DeleteIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    startIcon={<AddIcon />}
                    sx={{ mt: 2, bgcolor: 'green', color: 'white', '&:hover': { bgcolor: 'darkgreen' } }}
                    onClick={() => console.log("Adding people")}
                >
                    Add People
                </Button>
                <ActionButtons
                    onSave={() => console.log("Saving data...")}
                    onCancel={() => console.log("Cancelling...")}
                />
            </Box>
        </Box>
    );
};

export default Employee;
