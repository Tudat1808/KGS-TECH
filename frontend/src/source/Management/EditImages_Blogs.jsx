import React, {useState, useEffect} from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';
import ActionButtons from '../Management_Components/ActionButtons';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const EditImages_Blogs = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/blogs');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
      
          console.log(data, 'Fetched Data'); // Log toàn bộ dữ liệu trả về
          setBlog(data.blogs || []); // Truy cập trường 'blogs'
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };      
  
      fetchData();
    }, []);
    console.log(blog,'blog');
  
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading data: {error}</p>;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Management_DrawerComponent />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Management_Header />
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>Edit Images</Typography>
          <TableContainer component={Paper} sx={{ backgroundColor: 'grey.100' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Uploaded By</TableCell>
                  <TableCell>Date Upload</TableCell>
                  <TableCell>Date Update</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(blog) && blog.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">{item.id}</TableCell>
                    <TableCell>{item.title_key}</TableCell>
                    <TableCell>{item.description_key}</TableCell>
                    <TableCell style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.uploaded_by}</TableCell>
                    <TableCell>{item.date_upload}</TableCell>
                    <TableCell>{item.date_updated}</TableCell>
                    <TableCell align="right">
                      <IconButton onClick={() => console.log('Editing', row.id)}><EditIcon /></IconButton>
                      <IconButton onClick={() => console.log('Deleting', row.id)}><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            startIcon={<AddIcon />}
            sx={{ mt: 2, bgcolor: 'green', color: 'white', '&:hover': { bgcolor: 'darkgreen' } }}
            onClick={() => console.log("Adding image")}
          >
            Add Image
          </Button>
          <div style={{padding:'30px'}}>
          <ActionButtons
            onSave={() => console.log("Saving data...")}
            onCancel={() => console.log("Cancelling...")}
          /></div>
        </Box>
      </Box>
    </Box>
  );
}

export default EditImages_Blogs;

