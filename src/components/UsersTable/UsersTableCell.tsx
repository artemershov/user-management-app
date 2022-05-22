import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const UsersTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.root}`]: {
        color: 'white',
        border: 0,
        padding: '10px 20px',
    },
    [`&.${tableCellClasses.head}`]: {
        background: '#3D3D3D',
    },
    [`&.${tableCellClasses.body}`]: {
        background: '#494949',
    },
    [`&.${tableCellClasses.root}:first-of-type`]: {
        paddingLeft: '100px',
    },
    [`&.${tableCellClasses.root}:last-of-type`]: {
        paddingRight: '100px',
    },
}));

export default UsersTableCell;
