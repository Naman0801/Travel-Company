import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll'; 
import menuIcon from '../images/menu-icon.png'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const activeClass = () => {
        var links = document.getElementsByTagName('a');

        const linksArray = [];
        let item;
        for (item of links) {linksArray.push(item)} 
        
        linksArray.forEach(link => {
            link.addEventListener('click', function() {
                linksArray.forEach(l => l.classList.remove('active'));
                link.classList.add('active');                
            });
        });             
    }

    useEffect(() => {
        activeClass();
    }, [])

    return (
        <div className='navbar'>
            <img src={menuIcon} alt='menu-icon' onClick={() => setNavbarOpen(true)}/>
            <section className='navbar__navLinks' style={{right: `${navbarOpen ? '0' : '-100%'}`}}>
                <p className='close__btn' onClick={() => setNavbarOpen(false)}>X</p>
                <Link to='home' smooth={true} duration={1000} className='active'>Home</Link>
                <Link to='about' smooth={true} duration={1000}>About</Link>
                <Link to='rooms' smooth={true} duration={1000}>Rooms</Link>
                <Link to='todo' smooth={true} duration={1000}>Services</Link>
                <Link to='gallery' smooth={true} duration={1000}>Gallery</Link>
                <Link to='todo' smooth={true} duration={1000}>See & Do</Link>
                <Link to='contact' smooth={true} duration={1000}>Contact</Link>
            </section>
            <button>Book A Room</button>
        </div>
    )
}

export default Navbar
