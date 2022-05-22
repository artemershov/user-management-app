import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UsersApiResponse, UsersApiRequestBody } from '../../types';

export const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query<UsersApiResponse, UsersApiRequestBody>({
            query: (options) => ({
                url: 'users',
                method: 'GET',
                params: options,
            }),
            providesTags: ['User'],
        }),
        getUserById: builder.query({
            query: (id) => `users/${id}`,
        }),
        addUser: builder.mutation({
            query: (user) => ({ url: 'users', method: 'POST', body: user }),
            invalidatesTags: ['User'],
        }),
        editUser: builder.mutation({
            query: (user) => ({
                url: `users/${user._id}`,
                method: 'PATCH',
                body: user,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({ url: `users/${id}`, method: 'DELETE' }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useEditUserMutation,
    useDeleteUserMutation,
} = usersApi;
