import { selectUserById } from "../../../libs/users/UserSlice";
import { useAppSelector } from "../../../libs/hook";
import type { FC } from "react";

interface Props {
    userId: string;
}

const PostAuthor: FC<Props> = ({ userId }) => {
    const user: any = useAppSelector((state) => selectUserById(state, userId));
    return (
        <span>
            by {user ? `${user.firstName} ${user.lastName}` : "unknown"}
        </span>
    );
};

export default PostAuthor;
