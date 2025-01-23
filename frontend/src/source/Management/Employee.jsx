import React, { useState, useEffect} from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ActionButtons from '../Management_Components/ActionButtons';

const Employee = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [originalUser, setOriginalUser] = useState(null); // State để lưu dữ liệu gốc

    const handleSave = async () => {
        if (!selectedUser?.id) {
            console.error('No ID found for selected user!');
            return;
        }
    
        // So sánh selectedUser với dữ liệu gốc để tìm các trường đã thay đổi
        const updatedData = {};
        Object.keys(selectedUser).forEach((key) => {
            if (selectedUser[key] !== originalUser[key]) {
                updatedData[key] = selectedUser[key];
            }
        });
    
        // Nếu không có trường nào thay đổi, không gửi request
        if (Object.keys(updatedData).length === 0) {
            console.log('No changes detected.');
            setOpen(false);
            return;
        }
    
        console.log(`API URL: http://127.0.0.1:8000/api/users/${selectedUser.id}`);
        console.log('Data to be sent:', updatedData);
    
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${selectedUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify(updatedData),
            });
    
            if (response.ok) {
                console.log('User updated successfully.');
                // Reload toàn bộ trang
                window.location.href = window.location.href;
            } else {
                console.error('Failed to update user:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };
    
    
    const [isAddMode, setIsAddMode] = useState(false); // Quản lý trạng thái "Thêm User"
    const [newUser, setNewUser] = useState({
        username: '',
        email: '',
        phone: '',
        date_of_birth: '',
        gender: '',
        is_active: true,
        role: 'user',
    }); // Trạng thái để lưu thông tin User mới
    
    const handleAddClick = () => {
        setIsAddMode(true); // Bật chế độ thêm User
    };

    const handleNewUserInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: name === 'is_active' ? value === 'true' : value, // Xử lý giá trị boolean cho is_active
        }));
    };    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setSelectedUser((prevUser) => ({
            ...prevUser,
            [name]: name === 'is_active' ? value === 'true' : value, // Chuyển đổi is_active thành Boolean
        }));
    };

    const handleAddSave = async () => {
        // Kiểm tra các trường bắt buộc
        if (!newUser.email || !newUser.password) {
            console.error("Email and password are required!");
            alert("Email and password are required!");
            return;
        }
    
        console.log("Data to be sent:", newUser);
    
        try {
            const response = await fetch('http://127.0.0.1:8000/api/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(newUser),
            });
    
            if (response.ok) {
                const createdUser = await response.json();
                console.log("User added successfully:", createdUser);
    
                // Cập nhật danh sách người dùng với người dùng mới
                setUser((prevUsers) => [...prevUsers, createdUser.user]);
    
                // Đóng modal và reset form
                setNewUser({
                    username: '',
                    email: '',
                    phone: '',
                    date_of_birth: '',
                    gender: '',
                    is_active: true,
                    role: 'user',
                });
                setIsAddMode(false);
            } else {
                const errorData = await response.json();
                console.error("Failed to add user:", errorData.message || response.statusText);
                alert(errorData.message || "Failed to add user");
            }
        } catch (error) {
            console.error("Error adding user:", error);
            alert("An error occurred while adding the user. Please try again.");
        }
    };
    
        
    
    const handleEditClick = (user) => {
    
        setSelectedUser({ ...user }); // Lưu thông tin người dùng vào state
        setOriginalUser({ ...user }); // Lưu bản sao dữ liệu gốc để so sánh
        setOpen(true); // Mở modal
    };
    
    const handleDelete = async (userId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            });
    
            if (response.ok) {
                console.log("User deleted successfully");
    
                // Cập nhật danh sách người dùng trên frontend
                setUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));
            } else {
                console.error("Failed to delete user:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };    
    
  
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
                <Button
                    startIcon={<AddIcon />}
                    sx={{ mt: 2, bgcolor: 'green', color: 'white', '&:hover': { bgcolor: 'darkgreen' }, marginLeft: 'auto', display: 'block', }}
                    onClick={handleAddClick}
                >
                    Add More
                </Button>
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
                                <TableCell>Roles</TableCell>
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
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleEditClick(user)}><EditIcon /></IconButton>
                                        <IconButton onClick={() => handleDelete(user.id)}><DeleteIcon /></IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* Edit Modal */}
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="Username"
                            name="username"
                            value={selectedUser?.username || ''}
                            onChange={handleInputChange} // Kết nối với handleInputChange
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Email"
                            name="email"
                            value={selectedUser?.email || ''}
                            onChange={handleInputChange} // Kết nối với handleInputChange
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Phone"
                            name="phone"
                            value={selectedUser?.phone || ''}
                            onChange={handleInputChange} // Kết nối với handleInputChange
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Birth Date"
                            name="date_of_birth"
                            value={selectedUser?.date_of_birth || ''}
                            onChange={handleInputChange} // Kết nối với handleInputChange
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Gender"
                            name="gender"
                            value={selectedUser?.gender || ''}
                            onChange={handleInputChange} // Kết nối với handleInputChange
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
                {/*Add Modals*/}
                <Dialog open={isAddMode} onClose={() => setIsAddMode(false)}>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="Username"
                            name="username"
                            value={newUser.username}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
<TextField
    margin="dense"
    label="Password"
    name="password"
    type="password" // Đặt type là "password" để ẩn giá trị nhập
    value={newUser.password || ''} // Đảm bảo giá trị không bị undefined
    onChange={handleNewUserInputChange} // Kết nối hàm xử lý sự kiện
    fullWidth
    required // Đánh dấu là trường bắt buộc
/>
                        <TextField
                            margin="dense"
                            label="Email"
                            name="email"
                            value={newUser.email}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Phone"
                            name="phone"
                            value={newUser.phone}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Birth Date"
                            name="date_of_birth"
                            value={newUser.date_of_birth}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Gender"
                            name="gender"
                            value={newUser.gender}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Status"
                            name="is_active"
                            value={newUser.is_active ? 'true' : 'false'}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            label="Role"
                            name="role"
                            value={newUser.role}
                            onChange={handleNewUserInputChange}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsAddMode(false)} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleAddSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>                
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
