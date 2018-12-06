import React from 'react';
import * as FontAwesome from 'react-icons/fa/index';
import * as image from '../../images/facebook/surfers-co_03.png';
import * as image1 from '../../images/facebook/surfers-co_07.png';
import * as image2 from '../../images/facebook/surfers-co_09.png';
import * as image3 from '../../images/facebook/surfers-co_11.png';
import * as image4 from '../../images/facebook/surfers-co_13.png';
import * as image5 from '../../images/facebook/surfers-co_15.png';
import * as image6 from '../../images/facebook/surfers-co_17.png';
import * as image7 from '../../images/facebook/surfers-co_07-19.png';
import * as image8 from '../../images/facebook/surfers-co_21.png';
import * as image9 from '../../images/facebook/surfers-co_23.png';
import classes from './facebook.css';

const facebook = () => (
    <div className={classes.Facebook}>
        <h1 className={classes.header}>facebook</h1>
        <div>
            <div className={classes.top}>
            <div className={classes.topLine}>
                <div className={classes.logo}>
                    <h5 className={classes.logoPara}>Srfrs <br />co</h5>
                </div>
                <div className={classes.subheader}>
                    <h3>Surfers Co.</h3>
                    <p style={{marginTop: "-20px"}}>52,000 likes</p>
                </div>
                </div>
                <div className={classes.icon}>
                    <button className={classes.button}><FontAwesome.FaFacebook style={{fill: "blue", margin: " 4px 5px 0 0"}}/>Like Page</button>
                    <button className={classes.button}><FontAwesome.FaShare style={{margin: " 4px 5px 0 0"}}/>Share</button>
                </div>
            </div>
            <div className={classes.innerBottom}>
                <div className={classes.bottom}>
                    <p style={{margin: "0"}}>You and 8 other friends like this</p>
                    <div className={classes.gallery}>
                        <img src={image1} alt="fb-friend"/>
                        <img src={image2} alt="fb-friend" />
                        <img src={image3} alt="fb-friend" />
                        <img src={image4} alt="fb-friend" />
                        <img src={image5} alt="fb-friend" />
                        <img src={image6} alt="fb-friend" />
                        <img src={image7} alt="fb-friend" />
                        <img src={image8} alt="fb-friend" />
                        <img src={image9} alt="fb-friend" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default facebook;