import { styled } from '@mui/material/styles';
import Select, { selectClasses } from '@mui/material/Select';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const StyledSelect = styled(Select)(({ theme }) => ({
    [`&.${outlinedInputClasses.root}`]: {
        color: 'white',
    },
    [`& .${selectClasses.icon}`]: {
        color: 'white',
    },
    [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: '#888',
    },
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: '#999',
    },
}));

export default StyledSelect;
