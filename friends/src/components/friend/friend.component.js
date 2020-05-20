import React from 'react';
import friends from '../../assets/friends.jpg';
import './friend.styles.scss';

const Friend = ({ name, email, age, }) => (
    <div className='collection-item'>
        <div className="image"
        style={{
            backgroundImage: `url(${friends})`}}/>
            <div className="content">
                <h2>Name: {name}</h2>
                <h3>Email: {email}</h3>
                <p>Age: {age}</p>
            </div>
    </div>
);

export default Friend;