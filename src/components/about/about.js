import React from "react";
import classes from './about.css';
import * as FontAwesome from 'react-icons/fa/index';

const about = () => (
    <div className={classes.relative}>
    <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.Text}>
                <h3 className={classes.heading}>We are surfers Co.</h3>
                <FontAwesome.FaTimes className={classes.closeButton}/>
                <p className={classes.para}>Lorem ipsum dolor sit amet, aeneam consectetur adipiscing elit. 
                    Fusce iaculis feugiat arcunum fermentum hendrerit. Suspendisse auctor labor nisi, et interdum diam facilisis,
                    aliquam pulvinar semi egetis belle sollicitudin ut. Nullam tincidun finibustus scelerisque.</p>
                <p className={classes.linkPara}><a className={classes.link} href="#">Read more</a></p>
            </div>
        </div>
        <video width="320px" height="200px" controls className={classes.video}>
            <source src="https://www.youtube.com/watch?v=Sou-nPU6VK4" />
        </video>
        </div>
        </div>
);

export default about;