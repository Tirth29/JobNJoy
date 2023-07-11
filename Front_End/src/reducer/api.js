export const server = "https://social.up.railway.app";
// export const server = "http://localhost:8000";

import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './Reducer/UserReducer';

export const store = configureStore({

    reducer: {
        user: userReducer,
        // post: postReducer,
    },
});