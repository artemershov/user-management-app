import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import TableBody from '@mui/material/TableBody';
import { usersSelector } from '../../redux';
import UsersTableRow from './UsersTableRow';

export const UsersTableBody: FC = () => {
    const users = useSelector(usersSelector);

    return (
        <TableBody>
            {users.map((item) => (
                <UsersTableRow key={item._id} data={item} />
            ))}
        </TableBody>
    );
};

export default UsersTableBody;
