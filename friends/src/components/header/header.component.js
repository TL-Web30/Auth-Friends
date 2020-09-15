import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.gif';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <img className = 'logo-container' src={logo} alt='myspace logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/signin'>
            SIGN IN
            </Link>
            <Link className='option' to='/addfriend'>
            ADD FRIEND
            </Link>
            <Link className='option' to='/friends'>
            SEE FRIENDS
            </Link>
        </div>
    </div>
);

export default Header;