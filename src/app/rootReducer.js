import { combineReducers } from '@reduxjs/toolkit';
import chatLibraryReducer from '../features/chatLibrary/chatLibrarySlice';

const rootReducer = combineReducers({
    chatLibrary: chatLibraryReducer,
});

export default rootReducer;