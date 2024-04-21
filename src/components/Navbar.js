import React from 'react'
import logo from '../images/logo.svg'


export default function Navbar() {
    return (
        <div className='nav'>
            <img className='nav--logo' src={logo} alt='world' />
            <h4 className='nav--text'>my traveljournal</h4>
        </div>
    )
}