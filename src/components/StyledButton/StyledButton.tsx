import { styled } from '@mui/material/styles';
import Button, { buttonClasses } from '@mui/material/Button';

export const StyledButton = styled(Button)(({ theme }) => ({
    [`&.${buttonClasses.root}`]: {
        backgroundColor: '#d97023',
        color: 'white',
        textTransform: 'none',
        fontSize: theme.typography.body1.fontSize,
    },
    [`&.${buttonClasses.sizeSmall}`]: {
        padding: '0 4px',
    },
    [`&.${buttonClasses.sizeMedium}`]: {},
    [`&.${buttonClasses.sizeLarge}`]: {},
    [`& .${buttonClasses.text}`]: {},
}));

export default StyledButton;
