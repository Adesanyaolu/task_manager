
import React from "react"
import Button from "./Button"

const Header = ( { title, onAdd, showAdd } ) => {

  return (
    <div className="header">
      <h1>{ title }</h1>
      <Button color = {showAdd ? 'red' : 'green'} 
              text = {showAdd ? 'Close' : 'ADD'} 
              onClick = {onAdd} />
    </div>
  )
}



Header.defaulProps = {
    title: 'Task Tracker',
}

export default Header