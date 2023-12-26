import fcss from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={fcss.item}>
        <span className={ isOnline ? fcss.active : fcss.notActive}></span>
        <img className="avatar" src={avatar} alt={`Avatar of ${name}`} width="48" />
        <p className="name">{name}</p>
      </li>
    );
};
