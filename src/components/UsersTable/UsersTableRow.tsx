import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import format from 'date-fns/format';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PermissionChip, mapPermissionToColor } from '../PermissionChip';
import UsersTableCell from './UsersTableCell';
import { StyledButton } from '../StyledButton';
import { Permission, User } from '../../types';
import {
    setSelectedUserId,
    setUserFormModalOpenState,
    setDeleteModalOpenState,
} from '../../redux';

export interface UsersTableRowProps {
    data: User;
}

export const UsersTableRow: FC<UsersTableRowProps> = ({ data }) => {
    const dispatch = useDispatch();

    const handleModifyClick = () => {
        dispatch(setSelectedUserId(data._id));
        dispatch(setUserFormModalOpenState(true));
    };

    const handleDeleteClick = () => {
        dispatch(setSelectedUserId(data._id));
        dispatch(setDeleteModalOpenState(true));
    };

    const fullName = `${data.firstName} ${data.lastName}`;
    const date = format(new Date(data.createdAt), 'MMMM d, y');

    return (
        <TableRow>
            <UsersTableCell>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sx={{ mr: 2, width: '30px', height: '30px' }}
                        alt={fullName}
                        src={data.avatar}
                    />
                    <Typography>{fullName}</Typography>
                </Box>
            </UsersTableCell>
            <UsersTableCell>
                <Typography>{data.email}</Typography>
            </UsersTableCell>
            <UsersTableCell>
                <LocationOnIcon
                    fontSize="small"
                    sx={{
                        color: (theme) => theme.palette.grey[600],
                        mb: '-3px',
                        mr: '2px',
                    }}
                />
                <Typography component="span">{data.locations}</Typography>
            </UsersTableCell>
            <UsersTableCell>
                <Typography>{date}</Typography>
            </UsersTableCell>
            <UsersTableCell>
                {data.permissions && (
                    <Stack direction="row" spacing={1}>
                        {data.permissions.map((item) => (
                            <PermissionChip
                                key={item}
                                label={item}
                                color={mapPermissionToColor[item as Permission]}
                            />
                        ))}
                    </Stack>
                )}
            </UsersTableCell>
            <UsersTableCell>
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{ justifyContent: 'end' }}
                >
                    <StyledButton
                        onClick={handleModifyClick}
                        variant="contained"
                        size="small"
                    >
                        <EditOutlinedIcon sx={{ mr: '2px' }} />
                        Modify
                    </StyledButton>
                    <StyledButton
                        onClick={handleDeleteClick}
                        variant="contained"
                        size="small"
                    >
                        <DeleteOutlinedIcon sx={{ mr: '2px' }} />
                        Delete
                    </StyledButton>
                </Stack>
            </UsersTableCell>
        </TableRow>
    );
};

export default UsersTableRow;
