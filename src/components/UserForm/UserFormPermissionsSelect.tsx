import React, { FC } from 'react';
import { Controller, Control } from 'react-hook-form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { StyledSelect } from '../StyledSelect';
import { Permission } from '../../types';

export interface UserFormPermissionsSelectProps {
    disabled?: boolean;
    control: Control<any, any>;
}

export const UserFormPermissionsSelect: FC<UserFormPermissionsSelectProps> = ({
    disabled,
    control,
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                my: 3,
            }}
        >
            <Typography sx={{ width: '250px' }}>Permission</Typography>
            <Controller
                control={control}
                name="permissions"
                render={({ field }) => {
                    return (
                        <FormControl disabled={disabled}>
                            <StyledSelect
                                {...field}
                                value={field.value || []}
                                size="small"
                                disabled={disabled}
                                multiple={true}
                                sx={{ width: '250px' }}
                            >
                                {Object.values(Permission).map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {item}
                                    </MenuItem>
                                ))}
                            </StyledSelect>
                        </FormControl>
                    );
                }}
            />
        </Box>
    );
};

export default UserFormPermissionsSelect;
