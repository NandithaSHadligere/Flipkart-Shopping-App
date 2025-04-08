import { useState } from 'react';
import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(null);
    
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const logout = () => {
        setAccount('');
        handleClose();
    };
    
    return (
        <>
            <Box onClick={handleClick}>
                <Typography sx={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={logout}>
                    <PowerSettingsNew fontSize="small" color="primary" /> 
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    );    
}

export default Profile;
