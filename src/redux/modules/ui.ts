import { createAction, createReducer } from '@reduxjs/toolkit';
import { SortDirection } from '../../types';

export interface InitialUiState {
    searchValue: string;
    sortColumn: string;
    sortDirection: SortDirection;
    showRowsCount: number;
    currentPage: number;
    isUserFormModalOpen: boolean;
    isDeleteFormModalOpen: boolean;
    selectedUserId: string | null;
}

export const initialUiState: InitialUiState = {
    searchValue: '',
    sortColumn: '_id',
    sortDirection: SortDirection.ASC,
    showRowsCount: 10,
    currentPage: 1,
    isUserFormModalOpen: false,
    isDeleteFormModalOpen: false,
    selectedUserId: null,
};

export const setSearchValue = createAction<string>('ui/SET_SEARCH_VALUE');

export const setSortColumn = createAction<string>('ui/SET_SORT_COLUMN');

export const setSortDirection = createAction<SortDirection>(
    'ui/SET_SORT_DIRECTION'
);

export const setShowRowsCount = createAction<number>('ui/SET_SHOW_ROWS_COUNT');

export const setCurrentPage = createAction<number>('ui/SET_CURRENT_PAGE');

export const setUserFormModalOpenState = createAction<boolean>(
    'ui/SET_USER_FORM_MODAL_OPEN_STATE'
);

export const setDeleteModalOpenState = createAction<boolean>(
    'ui/SET_DELETE_MODAL_OPEN_STATE'
);

export const setSelectedUserId = createAction<string | null>(
    'ui/SET_SELECTED_USER_ID'
);

export const uiReducer = createReducer(initialUiState, (builder) => {
    builder
        .addCase(setSearchValue, (state, action) => ({
            ...state,
            searchValue: action.payload,
        }))
        .addCase(setSortColumn, (state, action) => ({
            ...state,
            sortColumn: action.payload,
        }))
        .addCase(setSortDirection, (state, action) => ({
            ...state,
            sortDirection: action.payload,
        }))
        .addCase(setShowRowsCount, (state, action) => ({
            ...state,
            showRowsCount: action.payload,
        }))
        .addCase(setCurrentPage, (state, action) => ({
            ...state,
            currentPage: action.payload,
        }))
        .addCase(setUserFormModalOpenState, (state, action) => ({
            ...state,
            isUserFormModalOpen: action.payload,
        }))
        .addCase(setDeleteModalOpenState, (state, action) => ({
            ...state,
            isDeleteFormModalOpen: action.payload,
        }))
        .addCase(setSelectedUserId, (state, action) => ({
            ...state,
            selectedUserId: action.payload,
        }));
});
