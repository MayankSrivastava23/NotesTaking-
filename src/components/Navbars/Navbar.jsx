import React from 'react';
import './nav.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="navaur">
                    <div className="logo">
                        <h3><span>P</span>A<span>T</span>E<span>L</span></h3>
                    </div>
                    <div className="reson">
                        <h1>MY NOTES</h1>
                    </div>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..."  id="textbar"/>
                    <label htmlFor="skd"><AiOutlineSearch/></label>
                </div>
            </div>
        </>
    )
}

export default Navbar