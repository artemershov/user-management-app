import React, { FC } from 'react';
import Table from '@mui/material/Table';
import UsersTableBody from './UsersTableBody';
import UsersTableHeader from './UsersTableHeader';
import UsersTableFooter from './UsersTableFooter';

export const UsersTable: FC = () => {
    return (
        <>
            <Table>
                <UsersTableHeader />
                <UsersTableBody />
            </Table>
            <UsersTableFooter />
        </>
    );
};

export default UsersTable;
