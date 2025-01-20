import React from 'react';
import { Typography, TableContainer, Table, TableHead, TableCell, TableRow, TableBody, Link as MuiLink } from '@mui/material';

const BlogInfoComponent = () => {
    return (
        <>
            <Typography variant="h4" sx={{ mt: 2, mb: 2, ml: 2 }}>
                Blog Information
            </Typography>
            <TableContainer sx={{ ml: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Link</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Example row */}
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Blog Post One</TableCell>
                            <TableCell>This is a description of the first blog post.</TableCell>
                            <TableCell>
                                <MuiLink href="http://example.com" target="_blank">Visit Link</MuiLink>
                            </TableCell>
                            <TableCell>2025-01-20</TableCell>
                        </TableRow>
                        {/* You can add more rows here dynamically as needed */}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default BlogInfoComponent;
