export enum Permission {
    USER = 'User',
    MANAGER = 'Manager',
    ADMIN = 'Admin',
}

export type User = {
    _id: string;
    nameTitle: string;
    firstName: string;
    lastName: string;
    avatar: string;
    email: string;
    locations: string;
    createdAt: string;
    updatedAt: string;
    permissions: Permission[] | null;
};
