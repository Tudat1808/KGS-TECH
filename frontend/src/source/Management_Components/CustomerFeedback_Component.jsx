import React, { useEffect, useState } from 'react';
import { 
    Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Box, Typography, 
    IconButton, Button, Dialog, DialogActions, 
    DialogContent, DialogTitle, TextField 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ActionButtons from '../Management_Components/ActionButtons';

const CustomerFeedback_Component = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [openEditDialog, setOpenEditDialog] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/feedback');
            const data = await response.json();
            setFeedbackData(data);
        } catch (error) {
            console.error('Error fetching feedback data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://127.0.0.1:8000/api/feedback/${id}`, {
                method: 'DELETE',
            });
            setFeedbackData(feedbackData.filter((feedback) => feedback.id !== id));
        } catch (error) {
            console.error('Error deleting feedback:', error);
        }
    };

    const handleEditClick = (feedback) => {
        setSelectedFeedback(feedback);
        setOpenEditDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenEditDialog(false);
        setSelectedFeedback(null);
    };

    const handleUpdate = async () => {
        if (!selectedFeedback) return;
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/feedback/${selectedFeedback.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(selectedFeedback),
            });

            if (response.ok) {
                setFeedbackData(feedbackData.map((feedback) => 
                    feedback.id === selectedFeedback.id ? selectedFeedback : feedback
                ));
                handleCloseDialog();
            } else {
                console.error('Failed to update feedback');
            }
        } catch (error) {
            console.error('Error updating feedback:', error);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
                Customer Feedback
            </Typography>

            <TableContainer component={Paper} sx={{bgcolor:'grey.100'}}>
                <Table sx={{ minWidth: 650 }} aria-label="customer feedback table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{width:'5%'}}>ID</TableCell>
                            <TableCell sx={{width:'10%'}}>Email</TableCell>
                            <TableCell sx={{width:'15%'}}>Title</TableCell>
                            <TableCell sx={{width:'30%'}}>Description</TableCell>
                            <TableCell sx={{width:'10%'}}>Upload Date</TableCell>
                            <TableCell sx={{width:'10%'}}align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbackData.map((feedback) => (
                            <TableRow key={feedback.id}>
                                <TableCell>{feedback.id}</TableCell>
                                <TableCell>{feedback.email}</TableCell>
                                <TableCell>{feedback.title}</TableCell>
                                <TableCell>{feedback.description}</TableCell>
                                <TableCell>{feedback.upload_date}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => handleEditClick(feedback)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(feedback.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>                            
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ padding: '30px' }}>
                <ActionButtons
                    onSave={() => console.log("Saving data...")}
                    onCancel={() => console.log("Cancelling...")}
                />
            </div>

            {/* Dialog chỉnh sửa Feedback */}
            <Dialog open={openEditDialog} onClose={handleCloseDialog}>
                <DialogTitle>Edit Feedback</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={selectedFeedback?.email || ''}
                        onChange={(e) => setSelectedFeedback({ ...selectedFeedback, email: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Title"
                        fullWidth
                        value={selectedFeedback?.title || ''}
                        onChange={(e) => setSelectedFeedback({ ...selectedFeedback, title: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        fullWidth
                        multiline
                        rows={4}
                        value={selectedFeedback?.description || ''}
                        onChange={(e) => setSelectedFeedback({ ...selectedFeedback, description: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CustomerFeedback_Component;
