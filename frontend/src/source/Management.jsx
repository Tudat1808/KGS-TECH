import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Paper, Box, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import LoadingPage from '../components/LoadingPage';
import DrawerComponent from '../components/DrawerComponent'; // Assuming correct path

const drawerWidth = 240;

const Management = () => {
  const [company, setCompany] = useState({ name: '', address: '', email: '' });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await axios.get('/api/company');
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company info', error);
      }
    };

    fetchCompanyInfo();
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/company', company);
      alert('Company info updated successfully!');
    } catch (error) {
      console.error('Error updating company info', error);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: { sm: `${drawerWidth}px` } }}>
            Company Management
          </Typography>
          <IconButton
            color="inherit"
            aria-label="logout"
            onClick={() => console.log('Logout')}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex' }}>
        <DrawerComponent mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Paper style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
            <Typography variant="h6">Manage Company Information</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Company Name"
                name="name"
                value={company.name}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Address"
                name="address"
                value={company.address}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                name="email"
                value={company.email}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Information
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Management;
