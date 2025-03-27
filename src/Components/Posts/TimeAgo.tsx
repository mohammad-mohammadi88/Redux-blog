import type { FC } from "react";
import moment from "moment";

interface Props {
    date: string;
}

const TimeAgo: FC<Props> = ({ date }) => {
    const momentDate = moment(date);
    return (
        <span title={momentDate.toString()}>
            &nbsp; <i>{momentDate.fromNow()}</i>
        </span>
    );
};

export default TimeAgo;
