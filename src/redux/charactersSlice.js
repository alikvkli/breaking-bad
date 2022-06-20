import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./services";
export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        status: "idle",
        error: null,
        page: 0,
        hasNextPage : true,
    },
    reducers: {},
    extraReducers: {
        //get characters
        [getCharacters.pending]: (state, action) => {
            state.status = "loading";
        },
        [getCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.status = "succeeded";
            state.page += 1;
            if(action.payload.length < 12){
                state.hasNextPage = false;
            }
        },
        [getCharacters.reducer]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        }
    }
});

export default charactersSlice.reducer;