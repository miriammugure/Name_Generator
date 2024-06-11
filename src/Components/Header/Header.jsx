import React from 'react'
import './Header.css'
import { BiHappyAlt } from "react-icons/bi";

function Header() {
  return (
    <div>
        <div className="HeaderContainer">
            <div className="logo">name generator</div>
            <div className="emoji"><BiHappyAlt />
            </div>
        </div>
      
    </div>
  )
}

export default Header
