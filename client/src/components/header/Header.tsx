import React from 'react'

interface IHeader {
  title: string
  children: React.ReactNode
}

const Header: React.FC<IHeader> = props => {
  let {title, children} = props
  return (
    <div className="d-flex justify-content-start">
      <h2>{title}</h2>
      <hr/>
      {children}
    </div>
  )
}

export default Header