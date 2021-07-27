import React from 'react';
import './MenuItem.css';

function MenuItem(props) {
    return <li>{props.children}</li>
    
    
        // <li>
        // <a href={props.link}>{props.lable}</a>
        // </li>
}

export default MenuItem
