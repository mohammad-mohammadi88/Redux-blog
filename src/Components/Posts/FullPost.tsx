import type { FC } from "react";
import { type Params, useParams } from "react-router-dom";
import { useAppSelector } from "../../../libs/hook";
import { selectPostById } from "../../../libs/posts/PostSlice";
import Reactions from "./Reactions";
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";

const FullPost: FC = () => {
    const params: Readonly<Params<string>> = useParams();
    const { user, date, title, content, reactions, id }: any = useAppSelector(
        (state) => selectPostById(state, params.postId)
    );

    return (
        <section>
            <article className='post'>
                <h2>{title}</h2>
                <div>
                    <PostAuthor userId={user} />
                    <TimeAgo date={date} />
                </div>
                <p className='post-content'>{content}</p>
                <Reactions postId={id} reactions={reactions} />
            </article>
        </section>
    );
};

export default FullPost;
