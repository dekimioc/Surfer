import React from 'react';
import * as FontAwesome from 'react-icons/fa/index';
import classes from './modal.css';
import boardTable from '../../images/modal/surfer_preview.png';
import smallPicture1 from '../../images/modal/surfers-co_09.png';
import smallPicture2 from '../../images/modal/surfer_board_4.png';
import smallPicture3 from '../../images/modal/surfers-co_13.png';
import smallPicture4 from '../../images/modal/surfers-co_18.png';


const modal = () => (
    <div className={classes.Modal}>
        <div className={classes.arrows}>
            <FontAwesome.FaArrowLeft size="20" style={{marginRight: "6px"}}/>
            <FontAwesome.FaArrowRight size="20" style={{marginLeft: "6px"}}/>
        </div>
        <p className={classes.status}>05/25</p>
        <div className={classes.content}>
        <div className={classes.leftSide}>
            <div style={{margin: "20px"}}>
                <img src={boardTable} alt="board"/>
            </div>
            <div className={classes.smallPictures}>
                <img src={smallPicture1} alt="board" className={classes.thumbnail} />
                <img src={smallPicture2} alt="board" className={classes.thumbnail} />
                <img src={smallPicture3} alt="board" className={classes.thumbnail} />
                <img src={smallPicture4} alt="board" className={classes.thumbnail} />
            </div>
        </div>
        <div>
            <h4 style={{marginLeft: "50px", maxWidth: "75%"}}>JR Surfboards The Donny Stoker Yellow/Green Rail Faid</h4>
            <div className={classes.stars}>
                <FontAwesome.FaStar style={{color: "#f2d800", marginRight: "4px"}}/>
                <FontAwesome.FaStar style={{color: "#f2d800", marginRight: "4px"}}/>
                <FontAwesome.FaStar style={{color: "#f2d800", marginRight: "4px"}}/>
                <FontAwesome.FaStar style={{color: "#f2d800", marginRight: "4px"}}/>
                <FontAwesome.FaStar />
                <p>(52)</p>
            </div>
            <div className={classes.rightSide}>
                <div>
                    <ul className={classes.ul}>
                        <li className={classes.li}>Descripiton</li>
                        <li className={classes.li}>Features</li>
                        <li className={classes.li}>Dimensioons</li>
                    </ul>
                </div>
                <p>Easy to ride, care free surfing craft tahas's fun for
                    everyone, paddlse well, super fast don the line and
                    greate for anu level of surfing depending on who rides it. The
                    Donny Stoker, a rework on design from and fun board. The Donny Stoker is a board for total
                    freesurfing expression
                </p>
                <div className={classes.price}>
                    <p><strong>$499.99</strong></p>
                    <button className={classes.buy}>Buy now</button>
                </div>
                <p><a href="#">View all boards</a></p>
            </div>
        </div>
        </div>
    </div>
);

export default modal;