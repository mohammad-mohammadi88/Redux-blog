import type { FC } from "react";
import { useAppDispatch } from "../../../libs/hook";
import { addReaction } from "../../../libs/posts/PostSlice";
import { EntityId } from "@reduxjs/toolkit";

interface Props {
    reaction: string;
    reactions: any;
    postId: EntityId;
}

const reactionIcons: Record<string, string> = {
    thumbsUp: "👍",
    hooray: "🎉",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀",
};
const ReactionBtn: FC<Props> = ({ reaction, reactions, postId }) => {
    const dispatch = useAppDispatch();
    const handleAddReaction = () => {
        dispatch(addReaction({ reactionName: reaction, postId }));
    };
    return (
        <button
            key={reaction}
            type='button'
            onClick={handleAddReaction}
            className='muted-button reaction-button'
        >
            {reactionIcons[reaction]} {reactions[reaction]}
        </button>
    );
};

export default ReactionBtn;
