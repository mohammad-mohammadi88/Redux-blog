import { selectPostById } from "../../../libs/posts/PostSlice";
import { useAppSelector } from "../../../libs/hook";
import type { EntityId } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import Reactions from "./Reactions";
import type { FC } from "react";
import TimeAgo from "./TimeAgo";

interface Props {
    postId: EntityId;
}

const Post: FC<Props> = ({ postId }) => {
    const { user, date, title, content, reactions, id }: any = useAppSelector(
        (state) => selectPostById(state, postId)
    );

    return (
        <article className='post-excerpt'>
            <h3>{title}</h3>
            <div>
                <PostAuthor userId={user} />
                <TimeAgo date={date} />
            </div>
            <p className='post-content'>{content.slice(0, 80)}</p>
            <Reactions postId={postId} reactions={reactions} />
            <Link className='button muted-button' to={`/post/${id}`}>
                View Post
            </Link>
        </article>
    );
};

export default Post;
