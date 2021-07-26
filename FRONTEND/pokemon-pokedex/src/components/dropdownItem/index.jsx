import React from 'react'

import './Styles.css'

function dropdownItem (props) {
    return(
        <>
            <a className="dropdown-item" onClick={props.getFilter}>{props.text}</a>
        </>
    )
}

export default dropdownItem;