import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../state/todoSlice";
import settingSlicce from "../state/settingSlicce";


export default configureStore({
    reducer:{

        todo:todoReducer,
        settings:settingSlicce,
    }
})