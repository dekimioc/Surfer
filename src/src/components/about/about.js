import React from "react";
import classes from './about.css';
import surfer from '../../images/about/about_back.png';
import * as FontAwesome from 'react-icons/fa/index';

const about = () => (
    <div className={classes.About}>
        <img src={surfer} style={{maxWidth: "100%"}}/>
        <div className={classes.content}>
            <div className={classes.Text}>
                <h3 className={classes.heading}>We are surfers Co.</h3>
                <FontAwesome.FaTimes className={classes.closeButton}/>
                <p>Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. 
                    Fusce iaculis feugiat arcunum fermentum hendrerit. Suspendisse auctor labor nisi, et interdum diam facilisis,
                    aliquam pulvinar semi egetis belle sollicitudin ut. Nullam tincidun finibustus scelerisque.</p>
                <a href="#">Read more</a>
            </div>
        </div>
        <video width="25%" controls className={classes.video}>
                <source src="https://www.youtube.com/watch?v=Sou-nPU6VK4" />
            </video>
    </div>
);

export default about;