import { styled } from '@mui/material/styles';
import OutlinedInput, {
    outlinedInputClasses,
} from '@mui/material/OutlinedInput';

export const StyledInput = styled(OutlinedInput)(() => ({
    [`&.${outlinedInputClasses.root}`]: {
        color: 'white',
    },
    [`& .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: '#888',
    },
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: '#999',
    },
}));

export default StyledInput;
