import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Chip, { ChipProps, chipClasses } from '@mui/material/Chip';
import { Permission } from '../../types';

export const mapPermissionToColor: Record<Permission, ChipProps['color']> = {
    [Permission.ADMIN]: 'primary',
    [Permission.MANAGER]: 'secondary',
    [Permission.USER]: 'info',
};

const permissionChipTheme = createTheme({
    palette: {
        primary: { main: '#de6666' },
        secondary: { main: '#304e5c' },
        info: { main: '#1a1c20' },
    },
});

const PermissionChipComponent = styled(Chip)(({ theme }) => ({
    [`&.${chipClasses.root}`]: {
        height: 'auto',
        padding: '1px 4px',
        borderRadius: '4px',
    },
    [`& .${chipClasses.label}`]: {
        padding: '0',
        color: 'white',
        fontSize: theme.typography.body1.fontSize,
    },
}));

export const PermissionChip: FC<ChipProps> = (props) => (
    <ThemeProvider theme={permissionChipTheme}>
        <PermissionChipComponent {...props} />
    </ThemeProvider>
);

export default PermissionChip;
