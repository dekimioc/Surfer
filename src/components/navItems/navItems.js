import React from "react";
import * as FontAwesome from 'react-icons/fa/index';
import classes from './navItems.css';

const navItems = (props) => (
    <div className={classes.NavItems}>
        <h3 className={classes.header}>Surfers Co.</h3>
        <nav className={classes.nav}> 
            <ul  className={classes.ul}>
                <li className={classes.li} onClick={props.openModal}>Boards</li>
                <li className={classes.li}>Accessories</li>
                <li className={classes.li}>Blog</li>
                <li className={classes.li}>Technology</li>
                <li className={classes.li}>Team</li>
                <li className={classes.li}>Dealers</li>
            </ul>
        </nav>
        <div>
           <a href="http://www.facebook.com" target="_blank">< FontAwesome.FaFacebookF className={classes.icon}/></a>
            <a  href="http://www.instagram.com" target="_blank"><FontAwesome.FaInstagram className={classes.icon}/></a>
            <a href="http://www.gmail.com" target="_blank"><FontAwesome.FaEnvelope className={classes.icon}/></a>
        </div>
    </div>
);

export default navItems;