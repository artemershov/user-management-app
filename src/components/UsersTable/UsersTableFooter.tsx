import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import { StyledSelect } from '../StyledSelect';
import { StyledPagination } from '../StyledPagination';
import {
    setShowRowsCount,
    setCurrentPage,
    paginationOptionsSelector,
} from '../../redux';

const ROWS_COUNT = [10, 20, 50, 100];

export const UsersTableFooter: FC = () => {
    const dispatch = useDispatch();

    const { count, page, limit } = useSelector(paginationOptionsSelector);

    const handleChangeRowsCount = (event: SelectChangeEvent<unknown>) => {
        dispatch(setShowRowsCount(event.target.value as number));
    };

    const handlePagination = (
        event: React.ChangeEvent<unknown>,
        page: number
    ) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <Box
            sx={{
                p: '30px 100px',
                bgcolor: '#494949',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <StyledPagination
                page={Number(page) + 1}
                count={Math.ceil(count / Number(limit))}
                onChange={handlePagination}
                size="small"
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography sx={{ mr: 2 }}>Show: </Typography>
                <StyledSelect
                    size="small"
                    value={limit}
                    onChange={handleChangeRowsCount}
                    sx={{ borderRadius: 0 }}
                >
                    {ROWS_COUNT.map((item) => (
                        <MenuItem key={item} value={item}>
                            {item} rows
                        </MenuItem>
                    ))}
                </StyledSelect>
            </Box>
        </Box>
    );
};

export default UsersTableFooter;
