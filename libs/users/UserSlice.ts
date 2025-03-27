import type { UsersStateInterface, UsersBuilderInterface } from "./UsersInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../src/api/client";
import type { RootState } from "../store";
import {
    ActionReducerMapBuilder,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";

const usersAdapter = createEntityAdapter();
export const {
    selectById:selectUserById,
    selectAll:selectAllUsers,
    selectIds:selectUserIds,
    selectTotal
} = usersAdapter.getSelectors((state:RootState)=>state.users)
const initialState = usersAdapter.getInitialState<UsersStateInterface>({
    status: "idle",
});

const fetchFn = async () => await client.get("users");
export const fetchUsers = createAsyncThunk("users/fetchUsers", fetchFn);
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (
        builder: ActionReducerMapBuilder<UsersBuilderInterface>
    ) => {
        const { pending, fulfilled, rejected } = fetchUsers;
        builder
            .addCase(pending, (state, action) => {
                state.status = action.meta.requestStatus;
            })
            .addCase(fulfilled, (state, action) => {
                state.status = action.meta.requestStatus;
                usersAdapter.upsertMany(state, action.payload);
            })
            .addCase(rejected, (state, action) => {
                state.error = action.error.message;
                state.status = action.meta.requestStatus;
            });
    },
});

export default usersSlice.reducer;
