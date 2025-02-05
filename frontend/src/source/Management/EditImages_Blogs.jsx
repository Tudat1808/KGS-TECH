import React, {useState, useEffect} from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import ActionButtons from '../Management_Components/ActionButtons';
import AddIcon from '@mui/icons-material/Add';

const EditImages_Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [originalBlog, setOriginalBlog] = useState(null);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleEditClick = (blog) => {
      setSelectedBlog({ ...blog });
      setOriginalBlog({ ...blog });
      setOpen(true);
  };

  const handleAddClick = () => {
      setIsAddMode(true);
  };

  const handleDelete = async (blogId) => {
      try {
          const response = await fetch(`http://127.0.0.1:8000/api/blogs/${blogId}`, {
              method: "DELETE",
              headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          });

          if (response.ok) {
              console.log("Blog deleted successfully");
              setBlog((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
          } else {
              console.error("Failed to delete blog:", response.statusText);
          }
      } catch (error) {
          console.error("Error deleting blog:", error);
      }
  };

  const handleSave = async () => {
    if (!selectedBlog?.id) {
        console.error("No ID found for selected blog!");
        return;
    }

    const updatedData = { ...selectedBlog };

    try {
        const response = await fetch(`http://127.0.0.1:8000/api/blogs/${updatedData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            console.error(`Failed to update blog: ${response.status} ${response.statusText}`);
            const errorText = await response.text(); // Đọc nội dung lỗi từ server
            console.error('Error details:', errorText);
            return;
        }

        const updatedBlog = await response.json();
        console.log("Blog updated successfully:", updatedBlog);

        setBlog((prevBlogs) =>
            prevBlogs.map((blog) =>
                blog.id === updatedBlog.blog.id ? { ...blog, ...updatedBlog.blog } : blog
            )
        );

        setOpen(false);
    } catch (error) {
        console.error("Error updating blog:", error);
    }
};


  const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      let finalValue = type === "checkbox" ? checked : value;
      setSelectedBlog((prevBlog) => ({ ...prevBlog, [name]: finalValue }));
  };

  const [newBlog, setNewBlog] = useState({
      title_key: "",
      description_key: "",
      uploaded_by: "",
  });

  const handleNewBlogInputChange = (event) => {
      const { name, value } = event.target;
      setNewBlog((prevBlog) => ({
          ...prevBlog,
          [name]: value,
      }));
  };

  const handleAddBlog = async (newBlog) => {
      try {
          const response = await fetch("http://127.0.0.1:8000/api/blogs", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify(newBlog),
          });
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setBlog([...blog, data]);
          console.log("Blog added successfully:", data);
      } catch (error) {
          console.error("Error adding blog:", error);
      }
  };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("http://127.0.0.1:8000/api/blogs");
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const data = await response.json();
              setBlog(data || []);
          } catch (error) {
              console.error("Error fetching data:", error);
              setError(error.message);
          } finally {
              setLoading(false);
          }
      };

      fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;
  if (blog.length === 0) return <p>No blogs found!</p>;

  return (
      <Box sx={{ display: "flex", height: "100vh" }}>
          <Management_DrawerComponent />
          <Box sx={{ flexGrow: 1, p: 3 }}>
              <Management_Header />
              <Box sx={{ mt: 8 }}>
                  <Typography variant="h4" gutterBottom>
                      Edit Images
                  </Typography>
                  <Button
                      startIcon={<AddIcon />}
                      sx={{
                          mt: 2,
                          bgcolor: "green",
                          color: "white",
                          "&:hover": { bgcolor: "darkgreen" },
                          marginLeft: "auto",
                          display: "block",
                      }}
                      onClick={handleAddClick}
                  >
                      Add More
                  </Button>
                  <TableContainer component={Paper} sx={{ backgroundColor: "grey.100" }}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                              <TableRow>
                                  <TableCell sx={{ width: "5%" }}>ID</TableCell>
                                  <TableCell sx={{ width: "10%" }}>Title</TableCell>
                                  <TableCell sx={{ width: "35%" }}>Description</TableCell>
                                  <TableCell sx={{ width: "5%" }}>Uploaded By</TableCell>
                                  <TableCell sx={{ width: "10%" }}>Actions</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {blog.map((blogItem) => (
                                  <TableRow key={blogItem.id}>
                                      <TableCell>{blogItem.id}</TableCell>
                                      <TableCell>{blogItem.title_key}</TableCell>
                                      <TableCell>{blogItem.description_key}</TableCell>
                                      <TableCell>{blogItem.uploaded_by}</TableCell>
                                      <TableCell>
                                          <IconButton onClick={() => handleEditClick(blogItem)}>
                                              <EditIcon />
                                          </IconButton>
                                          <IconButton onClick={() => handleDelete(blogItem.id)}>
                                              <DeleteIcon />
                                          </IconButton>
                                      </TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
                  {/* Edit Modal */}
                  <Dialog open={open} onClose={() => setOpen(false)}>
                      <DialogTitle>Edit Blog</DialogTitle>
                      <DialogContent>
                          <TextField
                              margin="dense"
                              label="Title"
                              name="title_key"
                              value={selectedBlog?.title_key || ""}
                              onChange={handleInputChange}
                              fullWidth
                          />
                          <TextField
                              margin="dense"
                              label="Description"
                              name="description_key"
                              value={selectedBlog?.description_key || ""}
                              onChange={handleInputChange}
                              fullWidth
                          />
                          <TextField
                              margin="dense"
                              label="Uploaded By"
                              name="uploaded_by"
                              value={selectedBlog?.uploaded_by || ""}
                              onChange={handleInputChange}
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
                  {/* Add Modal */}
                  <Dialog open={isAddMode} onClose={() => setIsAddMode(false)}>
                      <DialogTitle>Add New Blog</DialogTitle>
                      <DialogContent>
                          <TextField
                              margin="dense"
                              label="Title"
                              name="title_key"
                              value={newBlog.title_key}
                              onChange={handleNewBlogInputChange}
                              fullWidth
                          />
                          <TextField
                              margin="dense"
                              label="Description"
                              name="description_key"
                              value={newBlog.description_key}
                              onChange={handleNewBlogInputChange}
                              fullWidth
                          />
                          <TextField
                              margin="dense"
                              label="Uploaded By"
                              name="uploaded_by"
                              value={newBlog.uploaded_by}
                              onChange={handleNewBlogInputChange}
                              fullWidth
                          />
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={() => setIsAddMode(false)} color="secondary">
                              Cancel
                          </Button>
                          <Button onClick={() => handleAddBlog(newBlog)} color="primary">
                              Save
                          </Button>
                      </DialogActions>
                  </Dialog>
              </Box>
          </Box>
      </Box>
  );
};

export default EditImages_Blogs;
