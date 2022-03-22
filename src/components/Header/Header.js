import React from 'react'
import './Header.css';

function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/person">Person</a></li>
                <li><a href="/countries">Countries</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header