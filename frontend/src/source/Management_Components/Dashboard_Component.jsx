import React from 'react';
import { Card, CardActionArea, CardContent, Typography, Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; // Icon for Employee Management
import ChatIcon from '@mui/icons-material/Chat'; // Icon for Customer Service
import ArticleIcon from '@mui/icons-material/Article'; // Icon for Blog Management
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[10]
    }
}));

function Dashboard_Component() {
    const sections = [
        {
            title: "Blog Management",
            path: "/management/editimages_blogs",
            Icon: ArticleIcon,
            details: [
                { text: "Edit Posts", link: "/edit-posts" },
                { text: "Review Comments", link: "/review-comments" }
            ]
        },
        {
            title: "Employee Management",
            path: "/management/employee",
            Icon: BusinessCenterIcon,
            details: [
                { text: "Employee Records", link: "/employee-records" },
                { text: "Department Management", link: "/department-management" }
            ]
        },
        {
            title: "Customer Service",
            path: "/management/management_companyinfo",
            Icon: ChatIcon,
            details: [
                { text: "Customer Queries", link: "/customer-queries" },
                { text: "Information Update", link: "/info-update" }
            ]
        }
    ];

    return (
        <Paper sx={{ margin: 2, padding: 2 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', margin: 2 }}>Dashboard</Typography>
            <Grid container spacing={3} justifyContent="center">
                {sections.map((section, index) => (
                    <Grid item xs={12} key={index}>
                        <StyledCard>
                            <Link to={section.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <CardActionArea>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <section.Icon sx={{ fontSize: 40, color: 'action.active' }} />
                                        <Typography variant="h5" component="div">
                                            {section.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                            <List>
                                {section.details.map((detail, idx) => (
                                    <ListItem key={idx}>
                                        <ListItemText>
                                            <Link to={detail.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {detail.text}
                                            </Link>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

export default Dashboard_Component;
