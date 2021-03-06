import React, { FC } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UsersTableCell from './UsersTableCell';
import UsersTableHeaderSortTitle from './UsersTableHeaderSortTitle';

export const UsersTableHeader: FC = () => {
    return (
        <TableHead>
            <TableRow>
                <UsersTableCell>
                    <UsersTableHeaderSortTitle
                        title="Full Name"
                        field="firstName"
                    />
                </UsersTableCell>
                <UsersTableCell>
                    <UsersTableHeaderSortTitle
                        title="Email Address"
                        field="email"
                    />
                </UsersTableCell>
                <UsersTableCell>
                    <UsersTableHeaderSortTitle
                        title="Location"
                        field="locations"
                    />
                </UsersTableCell>
                <UsersTableCell>
                    <UsersTableHeaderSortTitle
                        title="Joined"
                        field="createdAt"
                    />
                </UsersTableCell>
                <UsersTableCell>
                    <UsersTableHeaderSortTitle
                        title="Permissions"
                        field="permissions"
                    />
                </UsersTableCell>
                <UsersTableCell />
            </TableRow>
        </TableHead>
    );
};

export default UsersTableHeader;
