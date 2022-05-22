import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import PaginationItem, {
    paginationItemClasses,
} from '@mui/material/PaginationItem';

export const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
    [`&.${paginationItemClasses.root}`]: {
        color: 'white',
        marginLeft: '5px',
        marginRight: '5px',
    },
    [`&.${paginationItemClasses.selected}`]: {
        backgroundColor: '#d97023',
    },
    [`&.${paginationItemClasses.previousNext}`]: {
        backgroundColor: '#292929',
        height: '40px',
        width: '40px',
        borderRadius: '40px',
        marginLeft: '10px',
        marginRight: '10px',
    },
}));

export const StyledPagination: FC<PaginationProps> = (props) => (
    <Pagination
        {...props}
        renderItem={(item) => <StyledPaginationItem {...item} />}
    />
);

export default StyledPagination;
