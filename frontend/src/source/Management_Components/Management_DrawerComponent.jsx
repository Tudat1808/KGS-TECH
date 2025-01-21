import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box, Collapse, Button
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ProjectIcon from '@mui/icons-material/AccountTree';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Management_DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <BusinessIcon />, link: '/management/homepage' },
    { text: 'Employees', icon: <PeopleIcon />, onClick: handleClick, children: ['Employee1', 'Employee2', 'Employee3'], link: '/management/employee' },
    { 
      text: 'Edit Blogs', 
      icon: <img src="https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg" style={{ width: 30, height: 30 }} />,
      link: '/management/editimages_blogs'
    },
    { text: 'Customers Feedback', icon: <FeedbackIcon />, link: '/management/customer_feedback' },
    { text: 'Training', icon: <SchoolIcon /> },
    { text: 'Performance', icon: <BarChartIcon /> },
    { text: 'HR Calendar', icon: <CalendarTodayIcon /> },
    { text: 'Consulting', icon: <SupportAgentIcon /> },
    { text: 'Project Management', icon: <ProjectIcon /> },
  ];

  return (
    <Drawer
  variant="permanent"
  sx={{
    width: drawerWidth,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column', // Đảm bảo các thành phần trong drawer được sắp xếp theo cột
    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'grey.100' },
  }}
>
  <Box sx={{ padding: 2, textAlign: 'center' }}>
    <Typography variant="h6"><Link to="/management/homepage">LOGO</Link></Typography>
  </Box>
  <Divider />
  <List sx={{ flexGrow: 1 }}>
    {menuItems.map((item, index) => (
      <React.Fragment key={index}>
        <ListItem 
          button 
          key={item.text} 
          component={item.link ? Link : "div"}
          to={item.link || "#"}
          onClick={item.onClick}
        >
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
          {item.children ? (open ? <ExpandLess /> : <ExpandMore />) : null}
        </ListItem>
        {item.children && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child, index) => (
                <ListItem button key={child}>
                  <ListItemText inset primary={child} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ))}
  </List>
  <Box sx={{ textAlign: 'center', mb: 2 }}>
    <Button
      startIcon={<LogoutIcon />}
      sx={{ bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}
      onClick={() => console.log("Logging out")}
    >
      Logout
    </Button>
  </Box>
</Drawer>

  );
};

export default Management_DrawerComponent;
