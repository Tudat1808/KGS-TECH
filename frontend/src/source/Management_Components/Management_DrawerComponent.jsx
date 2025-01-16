import React, { useState } from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography, Box, Collapse
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ProjectIcon from '@mui/icons-material/AccountTree';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Management_DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, link: '/management/dashboard' },
    { text: 'Employees', icon: <PeopleIcon />, onClick: handleClick, children: ['Employee1', 'Employee2', 'Employee3'] },
    { text: 'Human Resources', icon: <PeopleIcon /> },
    { text: 'Organization', icon: <BusinessIcon /> },
    { text: 'Time Sheets', icon: <AccessTimeIcon /> },
    { text: 'Training', icon: <SchoolIcon /> },
    { text: 'Performance', icon: <BarChartIcon /> },
    { text: 'HR Calendar', icon: <CalendarTodayIcon /> },
    { text: 'Consulting', icon: <SupportAgentIcon /> },
    { text: 'Project Management', icon: <ProjectIcon /> },
    { 
      text: 'Edit Images', 
      icon: <img src="https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg" style={{ width: 30, height: 30 }} />,
      link: '/management/editimages'
    }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="h6"><Link to="/management">LOGO</Link></Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <>
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
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default Management_DrawerComponent;
