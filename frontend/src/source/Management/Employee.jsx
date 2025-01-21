import React, { useState, useEffect} from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ActionButtons from '../Management_Components/ActionButtons';


const Employee = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/users');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
    console.log(user,'user');
  
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error}</p>;

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
                                <TableCell>Birth Date</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.date_of_birth}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.is_active}</TableCell>
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
                <div style={{padding:'30px'}}>
                <ActionButtons
                    onSave={() => console.log("Saving data...")}
                    onCancel={() => console.log("Cancelling...")}
                /></div>
            </Box>
        </Box>
    );
};

export default Employee;
