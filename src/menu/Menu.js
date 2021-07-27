import React from 'react'
import './menu.css'

export default function Menu(props) {
    return (
        <nav>
            <ul>
               {props.children} 
            </ul>
        </nav>
    )
}


