import React from 'react'
import { Container } from 'react-bootstrap'

interface IContainer {
  children: React.ReactNode
}

const Content: React.FC<IContainer> = props => {
  let {children} = props
  return (
    <div>
      <Container>
        <div style={{marginTop:50}}>
          {children}
        </div>
      </Container>
    </div>
  )
}

export default Content