import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
class Header extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Header
