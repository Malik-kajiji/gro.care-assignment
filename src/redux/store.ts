import { configureStore } from '@reduxjs/toolkit';
import { currentVideo } from './CurrentVid';


export const store = configureStore({
    reducer:{
        [currentVideo.name]:currentVideo.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>