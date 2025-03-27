import client from "../../src/api/client";
import { EntityId } from "@reduxjs/toolkit";


export const postFn = async (body:any) => {
    
    const response = await client.post('posts',body)
    return {statusText:response.statusText}  
};

export const getPostsFn = async () => await client.get("posts");
interface PostReactionInterface{
    postId:EntityId,
    reactionName:string
}
export const postReactionFn = async ({postId,reactionName}:PostReactionInterface) => {
    await client.post(`posts/${postId}/reaction/${reactionName}`)
    return {postId,reactionName}
}