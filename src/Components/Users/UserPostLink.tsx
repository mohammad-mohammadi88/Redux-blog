import type { EntityId } from '@reduxjs/toolkit';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props{postId:EntityId,title:string}

const UserPostLink :FC<Props> = ({ postId ,title }) => {
    return (
        <li><Link to={`/post/${postId}`} dideo-checked="true">{title}</Link></li>
    )
}

export default UserPostLink