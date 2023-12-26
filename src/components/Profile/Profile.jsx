import React from 'react';
import PropTypes from 'prop-types';
import pcss from './Profile.module.css';

const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className={pcss.description}>
      <img src={avatar} alt="User avatar" className={pcss.avatar} />
      <h2 className={pcss.title}>{username}</h2>
      <p className={pcss.subtitle}>{`@${tag}`}</p>
      <p className={pcss.subtitle}>{location}</p>
    </div>
  );
};

const Stats = ({ stats }) => {
  return (
    <ul className={pcss.list}>
      {Object.entries(stats).map(([label, quantity]) => (
        <li key={label} className={pcss.item}>
          <span className={pcss.label}> {label}</span>
          <span className={pcss.quantity}> {quantity}</span>
        </li>
      ))}
    </ul>
  );
};

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={pcss.profile}>
      <Description username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};