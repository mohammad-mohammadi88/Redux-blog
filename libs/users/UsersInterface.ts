import type { FetchStatus } from "../posts/PostsInterface";
import type { EntityId } from "@reduxjs/toolkit";

export interface UserInterface{
    id: string,
    firstName: string,
    lastName: string
}
export interface UsersStateInterface{
    status:FetchStatus;
    error?:string
}
export interface UsersBuilderInterface{
    status:FetchStatus;
    entities: any;
    ids: EntityId[];
    error?:string
}