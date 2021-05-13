import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'
function Header({title}) {

    const onClick = ()=>{
        console.log("click");
    }
    return (
        <header className="header">
            <h1 >
                {title}
            </h1>
           
            <Button color="green" text="Add" onClick={onClick}/>
            
        </header>
    )
}
Header.defaultProps ={
    title:"hello",
}
Header.defaultProps={
  title: PropTypes.string,
}
export default Header
