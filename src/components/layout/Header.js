import './Header.scss'
import React, { useState } from 'react'
import classnames from 'classnames'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Button from '../common/elements/Button'

const Header = () => {

    const [is_active, toggleNavbar] = useState(false)

    return (
        <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <Link className='navbar-item' to='/'>
                    <img src={logo} width='112' height='28' alt='logo'/>
                </Link>
                <Button 
                    onClick={() => {toggleNavbar(!is_active)}} 
                    className={classnames('navbar-burger', {'is-active': is_active})}
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </Button>
            </div>
            <div className={classnames('navbar-menu', {'is-active': is_active})}>
                <div className='navbar-start'>
                    <Link className='navbar-item' to='/' onClick={() => {toggleNavbar(!is_active)}}>
                        Home
                    </Link>
                    <Link className='navbar-item' to='/listings' onClick={() => {toggleNavbar(!is_active)}}>
                        Browse Listings
                    </Link>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <Button 
                                title='Log in' 
                                className='is-white'
                                onClick={() => {}}
                            />
                            <Button 
                                title='Sign up' 
                                className='is-primary'
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header