import React from 'react';
import wawe from '../../images/footer/Untitled-1.png';
import classes from './footer.css';
import * as FontAwesome from 'react-icons/fa/index';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.leftSide}>
            <h3>&copy; 2017 Surfers Co.</h3>
            <FontAwesome.FaCircle  className={classes.dot}/>
            <h3>Design by @lucaalco</h3>
        </div>
        <div className={classes.rightSide}>
            <div className={classes.description}>
            <div className={classes.leftSideDes}>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>About</p>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Boards</p>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Accesories</p>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Blog</p>
            </div>
            <div className={classes.rightSideDes}>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Technology</p>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Team</p>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Dealers</p>
                <p className={classes.para}><img src={wawe} alt="wawe" className={classes.image}/>Contact us</p>
            </div>
            </div>
        <div className={classes.formDiv}>
            <h4 style={{color: "white"}}>Subscribe to our newsletter</h4>
            <form className={classes.form}>
                <FontAwesome.FaEnvelope />
                <input type="text" placeholder="Your e-mail" className={classes.input}/>
                <FontAwesome.FaArrowAltCircleRight style={{fill: "#00b0ff"}}/>
            </form>
        </div>
        </div>
    </div>
);

export default footer;