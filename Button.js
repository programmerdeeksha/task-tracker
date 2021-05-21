import React from 'react'

function Button({color,text,onclick}) {
    return (
        <button className="btn" onClick={onclick} style={{backgroundColor:color}}>
            {text}
            </button>
    )
}

export default Button
