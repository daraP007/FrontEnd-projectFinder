import style from './Navigation.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <>
       
        <nav className= {style.nav}>
            <p className= {style.name}>Phay Study</p>
            <ol>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/class-prep">Class Prep</Link></li>
                <li><Link to = "/career-prep">Career Prep</Link></li>
                <li><Link to ="/leetcode-prep">Leetcode Prep</Link></li>
                <li><Link to ="/community">Community</Link></li>
                <li><Link to ="/signup">Sign up</Link></li>
                <li><Link to ="/login">Login</Link></li>
            </ol>
        </nav>
        </>
    );

}

export default Navigation;