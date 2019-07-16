import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';

class ScrollTop extends Component {
  render() {
    return (
      <Link smooth to="/#hero" class="scrolltop"><span class="fa fa-angle-up"></span></Link>
    );
  }
}

export default ScrollTop;