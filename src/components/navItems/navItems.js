import React from "react";
import * as FontAwesome from 'react-icons/fa/index';
import classes from './navItems.css';

const navItems = (props) => (
    <div className={classes.NavItems}>
        <h3>Surfers Co.</h3>
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
            <FontAwesome.FaFacebookF className={classes.icon}/>
            <FontAwesome.FaInstagram className={classes.icon}/>
            <FontAwesome.FaEnvelope className={classes.icon}/>
        </div>
    </div>
);

export default navItems;