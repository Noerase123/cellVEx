import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

interface INavHeader {
  title: string
}

const NavHeader: React.FC<INavHeader> = props => {
  let {title} = props
  return (
    <div>
      <Navbar bg="light">
        <Link to="/">
          <Navbar.Brand href="">{ title }</Navbar.Brand>
        </Link>
      </Navbar>
    </div>
  )
}

export default NavHeader