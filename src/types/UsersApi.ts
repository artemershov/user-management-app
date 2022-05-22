import { User } from './User';

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc',
}

export type UsersApiRequestBody = {
    limit?: number;
    page?: number;
    field?: string;
    sort?: SortDirection;
    search?: string;
};

export type PaginationOptions = {
    count: number;
    limit: string;
    page: string;
};

export type UsersApiResponse = {
    users: User[];
    data: PaginationOptions;
};
