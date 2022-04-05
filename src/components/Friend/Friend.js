import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Full Name: {name}</h2>
            <Link to={`/friend/${id}`}>Friends Detail</Link>
            <br />
            <button onClick={showFriendDetail}> {username}</button>

        </div>
    );
};

export default Friend;