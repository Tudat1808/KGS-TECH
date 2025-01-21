import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ActionButtons from '../Management_Components/ActionButtons';
import { useEffect, useState } from 'react';

const CustomerFeedback_Component = () => {
    const [feedbackData, setfeedbackData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/feedback');
                const data = await response.json();
                setfeedbackData(data);
            } catch (error) {
                console.error('Error fetching feedback data:', error);
            }
        };

        fetchData();
    }, []);
      console.log(feedbackData,'feedbackData');

    return (
        <>
        <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
                    Customer Feedback
                </Typography>
                <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Upload Date</TableCell>
                <TableCell align="right">Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {feedbackData.map((feedback) => (
                <TableRow
                    key={feedback.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {feedback.id}
                    </TableCell>
                    <TableCell>{feedback.email}</TableCell>
                    <TableCell>{feedback.title}</TableCell>
                    <TableCell>{feedback.description}</TableCell>
                    <TableCell>{feedback.upload_date}</TableCell>
                    <TableCell align="right">
                        <IconButton><EditIcon /></IconButton>
                        <IconButton><DeleteIcon /></IconButton>
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
        </>
    );
};

export default CustomerFeedback_Component;
