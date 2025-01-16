import React from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from '@mui/material';
import ActionButtons from '../Management_Components/ActionButtons';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const EditImages = () => {
  const imageData = [
    { id: 1, title: "Image 1", description: "This is image 1", link: "https://example.com/image1", updatedAt: "2022-01-01" },
    { id: 2, title: "Image 2", description: "This is image 2", link: "https://example.com/image2", updatedAt: "2022-01-02" },
    { id: 3, title: "Image 3", description: "This is image 3", link: "https://example.com/image3", updatedAt: "2022-01-03" },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Management_DrawerComponent />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Management_Header />
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom>Edit Images</Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Link</TableCell>
                  <TableCell>Updated At</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {imageData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{row.link}</TableCell>
                    <TableCell>{row.updatedAt}</TableCell>
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
          <ActionButtons
            onSave={() => console.log("Saving data...")}
            onCancel={() => console.log("Cancelling...")}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default EditImages;

