import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { StyledButton } from '../StyledButton';

export interface UserDeleteDialogProps {
    onYesClick: () => void;
    onNoClick: () => void;
}

export const UserDeleteDialog: FC<UserDeleteDialogProps> = ({
    onYesClick,
    onNoClick,
}) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography>Are you sure you want to delete this user ?</Typography>
            <Stack
                sx={{ mt: 3, justifyContent: 'center' }}
                direction="row"
                spacing={5}
            >
                <StyledButton onClick={onYesClick}>Yes</StyledButton>
                <StyledButton onClick={onNoClick}>No</StyledButton>
            </Stack>
        </Box>
    );
};

export default UserDeleteDialog;
