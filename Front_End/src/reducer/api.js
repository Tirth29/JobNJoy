export const server = "https://social.up.railway.app";

import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './Reducer/UserReducer';

export const store = configureStore({

    reducer: {
        user: userReducer,
        // post: postReducer,
    },

});