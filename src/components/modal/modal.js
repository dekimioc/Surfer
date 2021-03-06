import React, {Component} from 'react';
import * as FontAwesome from 'react-icons/fa/index';
import classes from './modal.css';
import boardTable from '../../images/modal/surfer_preview.png';
import surferPreview from '../../images/modal/surfer_2_preview.png';
import surferPreview2 from "../../images/modal/surfer_3_preview.png";
import surferPreview3 from "../../images/modal/surfer_4_preview.png";
import smallPicture1 from '../../images/modal/surfers-co_09.png';
import smallPicture2 from '../../images/modal/surfer_board_4.png';
import smallPicture3 from '../../images/modal/surfers-co_13.png';
import smallPicture4 from '../../images/modal/surfers-co_18.png';


class Modal extends Component {
    state = {   
        picture1: true,
        picture2: false,
        picture3: false,
        picture4: false
    }

    imageChangeHandler = () => {
        this.setState({picture1: true})
        if(this.state.picture1) {
            this.setState({
                picture2: false,
                picture3: false,
                picture4: false
            })
        }
    }

    imageTwoChangeHandler = () => {
        this.setState({picture1: false, picture2: true})
        if(this.state.picture2) {
            this.setState({
                picture3: false,
                picture4: false
            })
        }
    }

    imageThreeChangeHandler = () => {
        this.setState({picture3: true});
        if(this.state.picture3) {
            this.setState({
                picture2: false,
                picture4: false
            })
        }
    }

    imageFourthChangeHandler = () => {
        this.setState({picture1: false, picture4: true});
        if(this.state.picture4) {
            this.setState({
                picture2: false,
                picture3: false
            })
        }
        }
    

    
    render() {
        let preview = null;
        if (this.state.picture1) {
            preview = <img src={boardTable} alt="board" />
        }
        if (this.state.picture2) {
            preview = <img src={surferPreview} alt="board" />
        } 

        if (this.state.picture3) {
            preview = <img src={surferPreview2} alt="board" />
        }

        if (this.state.picture4) {
            preview = <img src={surferPreview3}  alt="board"/>
        } 
        return (
            <div className={classes.Modal}>
        <div className={classes.arrows}>
            <FontAwesome.FaArrowLeft size="20" style={{marginRight: "6px"}}/>
            <FontAwesome.FaArrowRight size="20" style={{marginLeft: "6px"}}/>
        </div>
        <p className={classes.status}>05/25</p>
        <div className={classes.content}>
        <div className={classes.leftSide}>
            <div style={{margin: "20px"}}>
                {preview}
            </div>
            <div className={classes.smallPictures}>
                <img onClick={this.imageChangeHandler} src={smallPicture1} alt="board" className={classes.thumbnail} />
                <img onClick={this.imageTwoChangeHandler} src={smallPicture2} alt="board" className={classes.thumbnail} />
                <img onClick={this.imageThreeChangeHandler} src={smallPicture3} alt="board" className={classes.thumbnail} />
                <img onClick={this.imageFourthChangeHandler} src={smallPicture4} alt="board" className={classes.thumbnail} />
            </div>
        </div>
        <div>
            <h4 className={classes.h4Heading}>JR Surfboards The Donny Stoker Yellow/Green Rail Faid</h4>
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
                <p><a className={classes.viewBoards} href="#">View all boards</a></p>
            </div>
        </div>
        </div>
            <h1 style={{wordWrap: "break-word",textAlign: "right", color: "#f7f7f7", fontSize: "15vw", margin: "0"}}>Boards</h1>
    </div>
        )
    }
}

export default Modal;