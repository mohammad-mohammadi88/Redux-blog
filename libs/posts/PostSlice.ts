import { getPostsFn, postFn, postReactionFn } from "./postFetcherFns";
import updateToast from "../../src/contracts/updateToast";
import { createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type { RootState } from "../store";
import {
    type ActionReducerMapBuilder,
    createEntityAdapter,
    createSlice,
} from "@reduxjs/toolkit";
import type {
    PostInterface,
    PostsBuilderInterface,
    PostsStateInterface,
} from "./PostsInterface";

const postsAdapter = createEntityAdapter({
    sortComparer: (a: any, b: any) => b.date - a.date,
});
export const {
    selectById: selectPostById,
    selectIds: selectPostIds,
    selectAll: selectAllPosts,
} = postsAdapter.getSelectors((state: RootState) => state.posts);
export const initialPostState = postsAdapter.getInitialState<PostsStateInterface>({
    status: "idle",
});
export const fetchPosts = createAsyncThunk("posts/fetchPosts", getPostsFn);

export const addNewPost = createAsyncThunk("posts/addPost", postFn);

export const selectUserPosts = createSelector(
    selectAllPosts,
    (_,userId) => userId,
    (posts:PostInterface[],userId) => posts.filter(post=>post.user === userId)
)

export const addReaction = createAsyncThunk(
    "posts/addReaction",
    postReactionFn
);

const postsSlice = createSlice({
    name: "posts",
    initialState: initialPostState,
    reducers: {},
    extraReducers: (
        builder: ActionReducerMapBuilder<PostsBuilderInterface>
    ) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = action.meta.requestStatus;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = action.meta.requestStatus;
                postsAdapter.upsertMany(state, action.payload);
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = action.meta.requestStatus;
            })
            .addCase(addNewPost.pending, () => {
                toast.loading("Creating post...", { toastId: "createPost" });
            })
            .addCase(addNewPost.fulfilled, (state, action) => {
                postsAdapter.addOne(state, action.meta.arg);
                updateToast("createPost", action.payload.statusText);
            })
            .addCase(addNewPost.rejected, (_, action) => {
                updateToast("createPost", action.error.message, "error");
            })
            .addCase(addReaction.fulfilled, (state, action) => {
                const { reactionName, postId } = action.payload;
                state.entities[postId].reactions[reactionName] += 1;
            })
            .addCase(addReaction.rejected, () => {
                toast.error("Something went wrong while saving reaction");
            });
    },
});

export default postsSlice.reducer;
