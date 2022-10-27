import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/data.slice'
import uiReducer from './slices/ui.slice'

const store = configureStore({
    devTools: true,
    reducer: {
        data: dataReducer,
        ui: uiReducer
    }
})

export default store;