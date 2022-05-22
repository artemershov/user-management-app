import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import { StyledButton } from '../StyledButton';
import UserFormInput from './UserFormInput';
import UserFormPermissionsSelect from './UserFormPermissionsSelect';
import { uiStateSelector, usersSelector } from '../../redux';
import { User } from '../../types';

const REQUIRED_ERROR_MESSAGE = 'This field is required';

export interface UserFormProps {
    onSubmit: (data: User) => void;
}

export const UserForm: FC<UserFormProps> = ({ onSubmit }) => {
    const { selectedUserId } = useSelector(uiStateSelector);
    const users = useSelector(usersSelector);

    const selectedUser = users.find(({ _id }) => _id === selectedUserId);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: selectedUser,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <UserFormInput
                label="First Name:"
                error={errors.firstName}
                register={register('firstName', {
                    required: REQUIRED_ERROR_MESSAGE,
                })}
            />
            <UserFormInput
                label="Last Name:"
                error={errors.lastName}
                register={register('lastName', {
                    required: REQUIRED_ERROR_MESSAGE,
                })}
            />
            <UserFormInput
                label="Email:"
                error={errors.email}
                register={register('email', {
                    required: REQUIRED_ERROR_MESSAGE,
                })}
            />
            <UserFormInput
                label="Location:"
                error={errors.locations}
                register={register('locations', {
                    required: REQUIRED_ERROR_MESSAGE,
                })}
            />
            <UserFormPermissionsSelect control={control} />
            <Box sx={{ textAlign: 'center' }}>
                <StyledButton sx={{ width: '200px' }} type="submit">
                    Submit
                </StyledButton>
            </Box>
        </form>
    );
};

export default UserForm;
