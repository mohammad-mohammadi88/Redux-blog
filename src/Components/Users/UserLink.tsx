import { selectUserById } from '../../../libs/users/UserSlice';
import { useAppSelector } from '../../../libs/hook';
import type { EntityId } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

interface Props{userId:EntityId}

const UserLink :FC<Props> = ({userId}) => {
    const state:any = useAppSelector(state => {
        return selectUserById(state,userId)
    })
    return <li><Link to={`/user/${userId}`}>{state.firstName} {state.lastName}</Link></li>
}

export default UserLink