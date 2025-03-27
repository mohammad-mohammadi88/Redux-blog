import { selectPostIds } from "../../../libs/posts/PostSlice";
import { useAppSelector } from "../../../libs/hook";
import type { EntityId } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import type { FC } from "react";
import Post from "./Post";

const PostsLists: FC = () => {
    const postIds = useAppSelector(selectPostIds);
    return (
        <section className='posts-list'>
            <br />
            <br />
            <Link to={"addPost"} className='redux-color'>
                Add Post
            </Link>
            <h2>Posts</h2>
            {postIds &&
                postIds.map((id: EntityId) => <Post key={id} postId={id} />)}
        </section>
    );
};

export default PostsLists;
