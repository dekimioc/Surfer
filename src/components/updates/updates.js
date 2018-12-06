import React from 'react';
import * as FontAwesome from 'react-icons/fa/index';
import first from '../../images/updates/surfers-co_39.png';
import second from '../../images/updates/surfers-co_41.png';
import third from '../../images/updates/surfers-co_43.png';
import classes from "./updates.css";

const updates = () => (
    <div className={classes.Updates}>
        <h2>Latest updates</h2>
        <FontAwesome.FaTimes className={classes.xButton}/>
        <div className={classes.section}>
            <img src={first} alt="surf" />
            <p>Ellie Turner and Jobe Harris have taken out the 2016 British National Surf Championships</p>
        </div>
        <div className={classes.section2}>
            <img src={second} alt="sea" />
            <p>A large group of surfers invaded the coast of La Jolla Shores, in California, with a single goal in mind</p>
        </div>
        <div className={classes.section3}>
            <img src={third} alt="sea" />
            <p>Surfboards are constantly evolving, and there are multiple board designs for a broad range of environments</p>
        </div>
        <button className={classes.button}>View all posts</button>
    </div>
);

export default updates;