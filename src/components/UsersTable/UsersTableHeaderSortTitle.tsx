import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { uiStateSelector, setSortColumn, setSortDirection } from '../../redux';
import { SortDirection } from '../../types';

export interface UsersTableHeaderSortTitleProps {
    title: string;
    field: string;
}

export const UsersTableHeaderSortTitle: FC<UsersTableHeaderSortTitleProps> = ({
    title,
    field,
}) => {
    const dispatch = useDispatch();

    const { sortColumn, sortDirection } = useSelector(uiStateSelector);

    const isActive = sortColumn === field;

    const handleClick = () => {
        if (!isActive) {
            dispatch(setSortColumn(field));
            dispatch(setSortDirection(SortDirection.ASC));
            return;
        }

        if (isActive && sortDirection === SortDirection.ASC) {
            dispatch(setSortDirection(SortDirection.DESC));
            return;
        }

        dispatch(setSortColumn('_id'));
        dispatch(setSortDirection(SortDirection.ASC));
    };

    return (
        <Link
            component="button"
            onClick={handleClick}
            sx={{
                color: isActive ? '#d97023' : 'white',
                textDecoration: 'none',
            }}
        >
            <Typography sx={{ whiteSpace: 'nowrap' }}>
                {title}
                {isActive ? (
                    sortDirection ? (
                        <ArrowDropUpIcon fontSize="small" sx={{ mb: '-4px' }} />
                    ) : (
                        <ArrowDropDownIcon
                            fontSize="small"
                            sx={{ mb: '-4px' }}
                        />
                    )
                ) : (
                    <UnfoldMoreIcon fontSize="small" sx={{ mb: '-6px' }} />
                )}
            </Typography>
        </Link>
    );
};

export default UsersTableHeaderSortTitle;
