import React, { useState } from 'react'
import './Header.scss'
import logo from './img/city-falcon-final-logo-01-trademark-horisontal.png'
import dp from './img/avaava.jpg'
import classnames from 'classnames'

export default function Header() {
    const [collapse, setCollapse] = useState(true)
    const toggleCollapse = e => {
        e.preventDefault()
        setCollapse(!collapse)
    }
    return (
        <header className="Header">
            <img src={logo} alt="logo" className="logo" />
            <span style={{ flexGrow: 1  }}></span>

            <div className="dropdown" onClick={toggleCollapse}>
                <div style={{
                    display: 'flex',
                    marginRight: 15,
                    marginLeft: 15,
                }}>
                    <img src={dp} alt="DP" className="dp" />
                    <span className="user-name">
                        Jane Doe
                    </span>
                    <i className={classnames('caret fa', { 'fa-caret-down': collapse, 'fa-caret-up': !collapse })} aria-hidden="true"></i>
                </div>
                <div className={classnames('dropdown-content', { 'd-none': collapse })}>
                    <div className="item">Sign Out</div>
                </div>
            </div>
        </header>
    )
}
