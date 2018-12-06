import React from 'react';
import image from '../../images/instagram/surfers-co_49.png';
import image1 from '../../images/instagram/surfers-co_50.png';
import image2 from '../../images/instagram/surfers-co_52.png';
import image3 from '../../images/instagram/surfers-co_53.png';
import * as FontAwesome from 'react-icons/fa/index';
import classes from './instagram.css';


const instagram = () => (
    <div className={classes.Instagram}>
        <h1 className={classes.heading}>Instagram</h1>
        <div className={classes.gallery}>
            <img src={image} alt="" className={classes.image}/>
            <img src={image1} alt="" className={classes.image}/>
            <img src={image2} alt="" className={classes.image}/>
            <img src={image3} alt="" className={classes.image}/>
        </div>
        <div className={classes.bottomText}>
            <FontAwesome.FaInstagram className={classes.icon} size="25"/>
            <h4 className={classes.follow}>Follow us</h4>
            <p className={classes.para}>@surfeesco</p>
        </div>
        
    </div>
);

export default instagram;