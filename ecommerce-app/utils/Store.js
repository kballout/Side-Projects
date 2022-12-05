import {configureStore} from "@reduxjs/toolkit"
import mainReducer from "./mainReducer"

export const Store = configureStore({
    reducer:{
        main: mainReducer
    }
})