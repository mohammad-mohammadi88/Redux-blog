import type { FetchStatus } from "../libs/posts/PostsInterface";
import { useAppDispatch, useAppSelector } from "../libs/hook";
import { fetchPosts } from "../libs/posts/PostSlice";
import { fetchUsers } from "../libs/users/UserSlice";
import FullPost from "./Components/Posts/FullPost";
import FullUser from "./Components/Users/FullUser";
import { Route, Routes } from "react-router-dom";
import AddPost from "./Components/Posts/AddPost";
import { useEffect, type FC } from "react";
import Layout from "./Components/Layout";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

function showContent(status: FetchStatus, error?: string) {
    switch (status) {
        case "pending":
            return <div className='loader'>loading ...</div>;
        case "rejected":
            return <div>{error}</div>;
        default:
            return false;
    }
}
const App: FC = () => {
    const dispatch = useAppDispatch();
    const { error: postError, status: postStatus } = useAppSelector(
        (state) => state.posts
    );
    const { error: userError, status: userStatus } = useAppSelector(
        (state) => state.users
    );
    useEffect(() => {
        postStatus === "idle" && dispatch(fetchPosts());
    }, [dispatch, postStatus]);
    useEffect(() => {
        userStatus === "idle" && dispatch(fetchUsers());
    }, [dispatch, userStatus]);
    const postContent = showContent(postStatus, postError);
    const userContent = showContent(userStatus, userError);
    const contents = postContent || userContent;
    return (
        <Layout>
            {contents || (
                <Routes>
                    <Route path='/' Component={Posts} />
                    <Route path="/post/:postId" Component={FullPost} />
                    <Route path='/addPost' Component={AddPost} />
                    <Route path='/users' Component={Users} />
                    <Route path='/user/:userId' Component={FullUser} />
                    <Route path='*' element={<div>404</div>} />
                </Routes>
            )}
        </Layout>
    );
};

export default App;
