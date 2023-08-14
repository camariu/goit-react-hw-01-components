import React from "react";
import PropTypes from 'prop-types';
import "./FriendList.css"

export default function FriendList({ friends }) {
 
  return (
    <div className="friend">
      {friends.map((friends) => {
        return (
          <ul key={friends.id} className="friend-list">
            <li className="item-friend">
              <span className={`status ${friends.isOnline ? "online" : "offline"}`}></span>
              <img
                className="avatar"
                src={friends.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friends.name}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}