import React, { FC } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { StyledInput } from '../StyledInput';

interface UserFormInputProps {
    label: string;
    error?: FieldError;
    register: UseFormRegisterReturn;
    disabled?: boolean;
}

export const UserFormInput: FC<UserFormInputProps> = ({
    label,
    error,
    register,
    disabled,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                my: 3,
            }}
        >
            <Typography sx={{ width: '250px' }}>{label}</Typography>
            <FormControl error={Boolean(error)} disabled={disabled}>
                <StyledInput
                    {...register}
                    size="small"
                    disabled={disabled}
                    sx={{ width: '250px' }}
                />
                {error?.message && (
                    <FormHelperText id={register.name}>
                        {error?.message}
                    </FormHelperText>
                )}
            </FormControl>
        </Box>
    );
};

export default UserFormInput;
