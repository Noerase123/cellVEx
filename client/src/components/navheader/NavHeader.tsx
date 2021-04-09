import React from 'react'
import {Navbar} from 'react-bootstrap'

interface INavHeader {
  title: string
}

const NavHeader: React.FC<INavHeader> = props => {
  let {title} = props
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">{ title }</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default NavHeader