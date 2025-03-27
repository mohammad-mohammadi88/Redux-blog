import { useAppSelector } from "../../../libs/hook";
import { selectUserIds } from "../../../libs/users/UserSlice";
import type { EntityId } from "@reduxjs/toolkit";
import UserLink from "./UserLink";
import type { FC } from "react";

const UsersList: FC = () => {
    const userIds = useAppSelector(selectUserIds);
    return (
        <section>
            <h2>Users</h2>
            <ul>
                {userIds &&
                    userIds.map((userId: EntityId) => (
                        <UserLink key={userId} userId={userId} />
                    ))}
            </ul>
        </section>
    );
};

export default UsersList;
