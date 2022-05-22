import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Logo from './logo.png';

export const Header: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                background: 'black',
            }}
        >
            <Box
                sx={{
                    background: `#151C20 url(${Logo}) left center no-repeat`,
                    backgroundSize: 'cover',
                    width: '200px',
                }}
            />
            <Typography
                sx={{
                    m: '10px 30px',
                    fontSize: '24px',
                }}
                component="h1"
            >
                User Management
            </Typography>
        </Box>
    );
};

export default Header;
