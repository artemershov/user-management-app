import { createSelector } from 'reselect';
import { usersApi } from '../services';
import { RootState } from '../store';
import { uiStateSelector } from './uiStateSelector';

export const usersServiceRequestParamSelector = createSelector(
    uiStateSelector,
    ({
        searchValue,
        showRowsCount,
        sortColumn,
        sortDirection,
        currentPage,
    }) => ({
        search: searchValue,
        limit: showRowsCount,
        field: sortColumn,
        sort: sortDirection,
        page: currentPage - 1,
    })
);

export const usersServiceState = (state: RootState) => {
    const params = usersServiceRequestParamSelector(state);
    return usersApi.endpoints.getUsers.select(params)(state).data;
};

export const usersSelector = createSelector(
    usersServiceState,
    (usersServiceResponse) => {
        return usersServiceResponse?.users || [];
    }
);

export const paginationOptionsSelector = createSelector(
    usersServiceState,
    (usersServiceResponse) => {
        return (
            usersServiceResponse?.data || {
                count: 0,
                limit: 0,
                page: 0,
            }
        );
    }
);
