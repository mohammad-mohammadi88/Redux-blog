import type { FC } from 'react';
import {  useParams } from 'react-router-dom';
import { useAppSelector } from '../../../libs/hook';
import { selectUserById } from '../../../libs/users/UserSlice';
import { selectUserPosts } from '../../../libs/posts/PostSlice';
import UserPostLink from './UserPostLink';

const FullUser :FC = () => {
    const params: any = useParams();
    const { firstName, lastName, id }: any = useAppSelector(
        (state) => selectUserById(state, params.userId)
    );
    const posts = useAppSelector(state=>selectUserPosts(state,id))
    return (
        <section>
            <h2>{firstName} {lastName}</h2>
            <ul>
                {posts && posts.map(({title,id})=><UserPostLink key={id} title={title} postId={id}/>)}
            </ul>
        </section>
    )
}

export default FullUser