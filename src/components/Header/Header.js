import React, {Component } from "react";
import NavItems from '../navItems/navItems';
import Modal from '../modal/modal';
import classes from './Header.css';
 
class Header extends Component {
    state = {
        showModal: false
    };

    toogleModal = () => {
        if(this.state.showModal === false) {
            this.setState({showModal: true})
        } else {
            this.setState({showModal: false})
        }
    }

    render() {
        let showModal = null;
        if (this.state.showModal) {
            showModal = <Modal />;
        } else {
            showModal = null;
        }
        return(
            <div className={classes.Header}>
                <NavItems 
                    openModal={this.toogleModal}/>
                <h1 className={classes.heading}>Ride every wawe as if it's your last</h1>
                <p className={classes.para}>We love the motion of the ocean</p>
                {showModal}
            </div>
        )
    }
};

export default Header;

