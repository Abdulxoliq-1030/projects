import React, { Component } from "react";
import avatarImg from "../../../../assets/images/image 1.svg";
import { logout } from "../../../../components/icons";

class Account extends Component {
  render() {
    return (
      <div className='account'>
        <div className='accountImg '>
          <img src={avatarImg} alt='not-found' />
        </div>
        <div
          className={`accountInfo ${!this.props.isOpened ? "hidden" : null} `}>
          <h2>Richard</h2>
          <p>9394lay@gmail.com</p>
        </div>
        <div className={`logout ${!this.props.isOpened ? "hidden" : null}`}>
          {logout}
        </div>
      </div>
    );
  }
}

export default Account;
