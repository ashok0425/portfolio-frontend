import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {

const menuItem = [
    { icon: "fa-home", menuName: "home" },
    { icon: "fa-user", menuName: "about" },
    { icon: "fa-briefcase", menuName: "portfolio" },
    { icon: "fa-envelope-open", menuName: "contact" },
  ];
  return (
    <div>
        <div className="header">
          <ul className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <li className="icon-box" key={i}>
                <Link to={item.menuName}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
                </Link>
              </li>
            ))}
            
          </ul>
        </div>
    </div>
  )
}
