import React, {useState} from 'react';
import { Box, Toolbar, Grid, Paper, Avatar, Button, TextField, IconButton, Link as MuiLink} from '@mui/material';
import Management_LeadersList from './Management_LeadersList';
import ActionButtons from './ActionButtons';
import EditIcon from '@mui/icons-material/Edit';

const drawerWidth = 240; // Giá trị này cần được định nghĩa nếu nó chưa được cung cấp

const Employee_Component = () => {
    const [company, setCompany] = React.useState({
        name: 'MyCompany',
        email: 'contact@mycompany.com',
        phone: '+1 255 29345690',
        address: '1234 Business Rd, Business City, BC 12345',
        description: 'Leading innovation in our industry.',
        foundedDate: '1999-04-01',
        link: 'http://www.mycompany.com'
    });
    
    // Handle input change for company details
    const handleChange = (prop) => (event) => {
        setCompany({ ...company, [prop]: event.target.value });
    };
    const handleEdit = (prop) => {
        setEditFields({ ...editFields, [prop]: true });
    };
    const [editFields, setEditFields] = useState({
        name: false,
        email: false,
        phone: false,
        address: false,
        description: false,
        foundedDate: false,
        link: false
    });    
    const handleSave = () => {
        // Here you would typically handle the update logic, possibly sending the updated company data to a server
        console.log('Saved company details:', company);
        // For demonstration, we're just logging to the console. In a real application, you would make an API call here.
    };
    const handleDelete = () => {
        // Confirm deletion with the user
        if (window.confirm('Are you sure you want to re-type all the infos?')) {
            // Logic to delete the company data
            console.log('Company details deleted');
    
            // In a real application, you might send a request to the server to delete the company data
            // Example:
            // axios.delete('/api/companies/' + company.id)
            //   .then(response => console.log('Delete successful'))
            //   .catch(error => console.error('Error deleting company', error));
    
            // Reset company state or handle UI changes post-deletion
            setCompany({
                name: '',
                email: '',
                phone: '',
                address: '',
                description: '',
                foundedDate: '',
                link: ''
            });
        }
    };
    // This example retains only the handleChange function for editing text fields. 
    // If you need to handle checkboxes or other input types, similar handlers can be added accordingly.
    

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'grey.100' }}>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, mb: 2 }} />
            <Button variant="outlined">Change Profile Image</Button>
          </Paper>
          <Management_LeadersList />
        </Grid>
        <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, backgroundColor: 'grey.100' }}>
            <Grid container spacing={2}>
                {Object.keys(company).map((key) => (
                    <Grid item xs={12} sm={key === 'description' ? 12 : 6} key={key}>
                        <TextField
                            fullWidth
                            label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            variant="outlined"
                            value={company[key]}
                            onChange={handleChange(key)}
                            disabled={!editFields[key]}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => handleEdit(key)} disabled={editFields[key]}>
                                        <EditIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        sx={{ mr: 2 }}
                    >
                        Save Changes
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleDelete}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', p: 2 }}>
                <ActionButtons
                    onSave={() => console.log("Saving data...")}
                    onCancel={() => console.log("Cancelling...")}
                />
            </Box>
      </Grid>
    </Box>
  );
}

export default Employee_Component;
