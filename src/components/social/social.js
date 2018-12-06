import React from 'react';
import Instagram from '../instagram/instagram';
import Facebook from '../facebook/facebook';
import classes from './social.css';

const social = () => (
    <div className={classes.Social}>
        <Instagram className={classes.Instagram}/>
        <Facebook className={classes.Facebook}/>
    </div>
)

export default social;