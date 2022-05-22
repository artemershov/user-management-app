import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Container from '@mui/material/Container';
import { store } from '../../redux';
import { Header } from '../Header';
import { UserManagementPage } from '../../pages';

export const App: FC = () => (
    <Provider store={store}>
        <Header />
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <UserManagementPage />
        </Container>
    </Provider>
);

export default App;
