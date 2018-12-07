import React from 'react';
import * as FontAwesome from 'react-icons/fa/index';
import * as Typicon from 'react-icons/ti/index';
import classes from "./team.css";
import img1 from '../../images/team/surfers-co_24.png';
import img2 from '../../images/team/surfers-co_29.png';
import img3 from '../../images/team/surfers-co_26.png';
import img4 from '../../images/team/surfers-co_32.png';

const team = () => (
    <div className={classes.Team}> 
        <h1 className={classes.h1Bottom}>Our Team</h1>
        <FontAwesome.FaArrowLeft className={classes.leftArrow}/>
        <div className={classes.gallery}>
        <div className={classes.firstTeam}>
            <img src={img1} alt="team-member" style={{display: "block", margin: "0 auto"}}/>
            <h4 className={classes.name}>Taj Burrow</h4>
            <h6>@tajamos</h6>
            <Typicon.TiWaves />
            <p><FontAwesome.FaMapMarkerAlt />Yallingup, Australia</p>
        </div>
        <div className={classes.secondTeam}>
            <img src={img2} alt="team-member" style={{display: "block", margin: "0 auto"}}/>
            <h4 className={classes.name}>Malia Manuel</h4>
            <h6>@maliamanuel</h6>
            <Typicon.TiWaves />
            <p><FontAwesome.FaMapMarkerAlt />Wailua, Hi</p>
        </div>
        <div className={classes.thirdTeam}>
            <img src={img3} alt="team-member" style={{display: "block", margin: "0 auto"}}/>
            <h4 className={classes.name}>Ian Walsh</h4>
            <h6>@ianwalsh</h6>
            <Typicon.TiWaves />
            <p><FontAwesome.FaMapMarkerAlt />Maui, Hi</p>
        </div>
        <div className={classes.fourthTeam}>
            <img src={img4} alt="team-member" style={{display: "block", margin: "0 auto"}}/>
            <h4 className={classes.name}>Macy Callaghan</h4>
            <h6>@macyjanecallaghan</h6>
            <Typicon.TiWaves />
            <p><FontAwesome.FaMapMarkerAlt />San Clemente, CA</p>
        </div>
        </div>
        <FontAwesome.FaArrowRight className={classes.rightArrow}/>
    </div>
);

export default team;