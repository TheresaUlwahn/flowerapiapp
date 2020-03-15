import React from 'react'
import './header.css'

export const Header = () => {

  return (
    <div className="container">    
      <nav>
        <p>Home</p>
        <p href="#">Member</p>
        <p href="#">Curious?</p>
      </nav>
      {/* Creating a hamburger menu with lines, made by div's */}
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <h1>Les Fleures - <br/> Get them green fingers inspired!</h1>
      {/* Empty link for future sign up  */}
      <a href="#">Sign up now</a>
    </div>
    
  )
}