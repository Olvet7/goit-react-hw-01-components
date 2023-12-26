import { FriendListItem } from "./FriendListItem";
import fcss from './FriendList.module.css'

export const FriendList = ({ friends }) => {
  return (
    <ul className={fcss.list}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
