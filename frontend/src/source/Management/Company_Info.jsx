import React from 'react';
import Management_DrawerComponent from '../Management_Components/Management_DrawerComponent';
import Management_Header from '../Management_Components/Management_Header';
import {Box} from '@mui/material';
import Companyinfo_Component from '../Management_Components/Companyinfo_Component';

const Company_Info = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <Management_Header />
            <Management_DrawerComponent />
            <Companyinfo_Component />
        </Box>
    );
};

export default Company_Info;
