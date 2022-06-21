import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const char_limit = 12;
export const getCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page * char_limit}`);
    return res.data;
});

export const getCharacterById = createAsyncThunk('characters/getCharacterById', async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${id}`);
    return res.data[0];
});

