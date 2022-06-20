import { createSlice } from "@reduxjs/toolkit";
import { getCharacters } from "./services";
export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        page: 0,
        hasNextPage : true,
    },
    reducers: {},
    extraReducers: {
        //get characters
        [getCharacters.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload];
            state.isLoading = false;
            state.page += 1;
            if(action.payload.length < 12){
                state.hasNextPage = false;
            }
        },
        [getCharacters.reducer]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        }
    }
});

export default charactersSlice.reducer;