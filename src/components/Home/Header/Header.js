import React from 'react';
import './Header.css';

function Header(props) {
  return <div className="h1">{props.title}</div>;
}
export default Header;