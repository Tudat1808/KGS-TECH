import React, {useState, useEffect} from 'react';
import { Box, Toolbar, Avatar, Button, TextField, IconButton} from '@mui/material';
import Dashboard_Component from './Dashboard_Component';
import ActionButtons from './ActionButtons';
import EditIcon from '@mui/icons-material/Edit';

const drawerWidth = 240; // Giá trị này cần được định nghĩa nếu nó chưa được cung cấp

const HomePage_Component = () => {
    const [company, setCompany] = useState({});
    const [editFields, setEditFields] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/company-info');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const filteredData = Object.keys(data).reduce((acc, key) => {
                    if (!['id', 'created_at', 'updated_at'].includes(key)) {
                        acc[key] = data[key];
                    }
                    return acc;
                }, {});
                setCompany(filteredData);
                setEditFields(Object.keys(filteredData).reduce((acc, key) => ({ ...acc, [key]: false }), {}));
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (prop) => (event) => {
        setCompany({ ...company, [prop]: event.target.value });
    };

    const handleEdit = (prop) => {
        setEditFields({ ...editFields, [prop]: !editFields[prop] });
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to reset all the infos?')) {
            setCompany(Object.keys(company).reduce((acc, key) => ({ ...acc, [key]: '' }), {}));
        }
    };

    if (loading) return <Box display="flex" justifyContent="center"><p>Loading...</p></Box>;
    if (error) return <Box display="flex" justifyContent="center"><p>Error loading data: {error}</p></Box>;

  return (
    <Box component="main" sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        overflowY: 'auto', // Cho phép cuộn nếu cần
        '& > *': { // Đảm bảo rằng tất cả các thành phần con không có margin bên dưới
            marginBottom: 0
        }
    }}>
        <Toolbar />
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
            overflowX: 'auto',
            width: '100%',
            minHeight: 'calc(100vh - 64px)', // Giả sử toolbar cao 64px
        }}>
            <Box sx={{
                flex: '1 1 auto',
                minWidth: '300px',
                p: 2,
                backgroundColor: 'grey.100',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': { // Xóa marginBottom của tất cả thành phần con
                    marginBottom: 0
                }
            }}>
                <Dashboard_Component />
            </Box>
            <Box sx={{
                flex: '3 1 auto',
                minWidth: { xs: '100%', sm: '600px' }, // Full width on small screens
                p: 2,
                backgroundColor: 'grey.100',
                '& > *': { // Xóa marginBottom của tất cả thành phần con
                    marginBottom: 0
                }
            }}>
                {Object.keys(company).map((key) => (
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
                        sx={{ mt: 2, mb: 2 }}
                    />
                ))}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="outlined" color="secondary" onClick={handleDelete}>
                            Reset
                        </Button>
                        <ActionButtons
                            onSave={() => console.log("Saving data...")}
                            onCancel={() => console.log("Cancelling...")}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 80, height: 80 }} />
                        <Button variant="outlined">Change Logo Image</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    
  );
}

export default HomePage_Component;
