import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const { friendId } = useParams();
    const [friend, setfriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setfriend(data));
    }, []);
    return (
        <div>
            <h2>THis is detail of Bondhu: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h5>website: {friend.website}</h5>
            <h5>Phone: {friend.phone}</h5>
            <h5>City: {friend.address?.city}</h5>
            <h5>Lat: {friend.address?.geo?.lat}</h5>
        </div>
    );
};

export default FriendDetail;