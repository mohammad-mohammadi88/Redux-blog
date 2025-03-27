import type { ReactionsInterface } from "../../../libs/posts/PostsInterface";
import type { FC } from "react";
import ReactionBtn from "./ReactionBtn";
import { EntityId } from "@reduxjs/toolkit";

interface Props {
    reactions: ReactionsInterface;
    postId: EntityId;
}

const Reactions: FC<Props> = ({ reactions, postId }) => {
    return (
        <div>
            {Object.keys(reactions).map((reaction: string) => (
                <ReactionBtn
                    key={reaction}
                    postId={postId}
                    reaction={reaction}
                    reactions={reactions}
                />
            ))}
        </div>
    );
};

export default Reactions;
