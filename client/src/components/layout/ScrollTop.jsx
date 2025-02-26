import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Replaced HashLink with Link

class ScrollTop extends Component {
  render() {
    return (
      <Link to="/#hero" className="scrolltop"><span className="fa fa-angle-up"></span></Link> // Removed smooth prop
    );
  }
}

export default ScrollTop;