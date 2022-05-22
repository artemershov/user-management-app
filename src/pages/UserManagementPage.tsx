import React, { FC, useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import {
    UsersTable,
    UserForm,
    UserDeleteDialog,
    StyledDialog,
    StyledInput,
    StyledButton,
} from '../components';
import {
    uiStateSelector,
    usersServiceRequestParamSelector,
    setSearchValue,
    setUserFormModalOpenState,
    setDeleteModalOpenState,
    setSelectedUserId,
    useGetUsersQuery,
    useDeleteUserMutation,
    useAddUserMutation,
    useEditUserMutation,
} from '../redux';

export const UserManagementPage: FC = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValueState] = useState('');

    const { isUserFormModalOpen, isDeleteFormModalOpen, selectedUserId } =
        useSelector(uiStateSelector);

    const params = useSelector(usersServiceRequestParamSelector);

    const { isFetching, isError } = useGetUsersQuery(params);
    const [deleteUserFetcher, { isLoading: isDeleteUserFetching }] =
        useDeleteUserMutation();
    const [addUserFetcher, { isLoading: isAddUserFetching }] =
        useAddUserMutation();
    const [editUserFetcher, { isLoading: isEditUserFetching }] =
        useEditUserMutation();

    const searchDebounce = useCallback(
        debounce((value: string) => dispatch(setSearchValue(value)), 300),
        [dispatch]
    );

    const handleSearchValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setSearchValueState(value);
        if (value.length === 0 || value.length >= 3) {
            searchDebounce(event.target.value);
        }
    };

    const handleCloseFormModal = () => {
        dispatch(setUserFormModalOpenState(false));
        dispatch(setSelectedUserId(null));
    };

    const handleCloseDeleteModal = () => {
        dispatch(setDeleteModalOpenState(false));
        dispatch(setSelectedUserId(null));
    };

    const handleAddUserClick = () => {
        dispatch(setSelectedUserId(null));
        dispatch(setUserFormModalOpenState(true));
    };

    const handleDeleteUser = async () => {
        await deleteUserFetcher(selectedUserId);
        handleCloseDeleteModal();
    };

    const handleUserFormSubmit = async (data: any) => {
        selectedUserId
            ? await editUserFetcher(data)
            : await addUserFetcher(data);
        handleCloseFormModal();
    };

    if (isError) {
        return <Typography variant="h3">Error occurred</Typography>;
    }

    return (
        <>
            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    mb: 4,
                }}
                component="h3"
            >
                User Management
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 5,
                }}
            >
                <StyledInput
                    placeholder="Search items..."
                    size="small"
                    sx={{
                        width: '500px',
                        borderRadius: 0,
                        backgroundColor: '#525353',
                    }}
                    value={searchValue}
                    onChange={handleSearchValueChange}
                />
                <StyledButton
                    size="large"
                    sx={{ width: '150px' }}
                    onClick={handleAddUserClick}
                >
                    <AddIcon sx={{ mr: 2 }} />
                    New user
                </StyledButton>
            </Box>

            {isFetching ? (
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress sx={{ color: 'white' }} />
                </Box>
            ) : (
                <UsersTable />
            )}

            <StyledDialog
                title={selectedUserId ? 'Modify User' : 'Add a new User'}
                open={isUserFormModalOpen}
                onClose={handleCloseFormModal}
            >
                {isAddUserFetching || isEditUserFetching ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <CircularProgress sx={{ color: 'white' }} />
                    </Box>
                ) : (
                    <UserForm onSubmit={handleUserFormSubmit} />
                )}
            </StyledDialog>

            <StyledDialog
                open={isDeleteFormModalOpen}
                onClose={handleCloseDeleteModal}
            >
                {isDeleteUserFetching ? (
                    <Box sx={{ textAlign: 'center' }}>
                        <CircularProgress sx={{ color: 'white' }} />
                    </Box>
                ) : (
                    <UserDeleteDialog
                        onYesClick={handleDeleteUser}
                        onNoClick={handleCloseDeleteModal}
                    />
                )}
            </StyledDialog>
        </>
    );
};

export default UserManagementPage;
