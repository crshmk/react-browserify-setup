import React from 'react'
import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <div className="topnav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
      </ul>
    </div>
  )
}
