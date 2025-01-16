import React from 'react';
import { Box, Button } from '@mui/material';

const ActionButtons = ({ onSave, onCancel }) => {
  // Dummy functions could also be defined here if not passed as props
  const handleSave = () => {
    alert("Changes saved!");
    if (onSave) onSave();
  };

  const handleCancel = () => {
    alert("Cancelled!");
    if (onCancel) onCancel();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
      <Button onClick={handleSave} sx={{ mr: 1 }} variant="contained">Save Changes</Button>
      <Button onClick={handleCancel} color="error">Cancel</Button>
    </Box>
  );
}

export default ActionButtons;
