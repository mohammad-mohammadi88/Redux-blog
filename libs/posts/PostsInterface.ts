import type { EntityId } from "@reduxjs/toolkit";
export interface ReactionsInterface{
    eyes: number,
    heart: number,
    hooray: number,
    rocket: number,
    thumbsUp: number
}
export interface PostInterface{
    id: EntityId,
    title: string,
    content: string,
    date: string,
    reactions: ReactionsInterface,
    user: string
}
export type FetchStatus = 'idle' | 'fulfilled' | 'rejected' | 'pending'
export interface PostsStateInterface{
    status: FetchStatus;
    entities?:any;
    error?:string
}
export interface PostsBuilderInterface{
    status: FetchStatus;
    entities: any;
    ids: EntityId[];
    error?:string
}