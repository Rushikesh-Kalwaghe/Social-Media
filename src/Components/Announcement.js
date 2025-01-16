import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    color: white;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    `

const Super = styled.div`
  font-size: 1.0em;
  vertical-align: super;
  position: relative;
  top: -0.25em;
`  
const Announcement = () => {
  return (
    <Container>
        SUPER DEAL !!! &nbsp;&nbsp;&nbsp; FLAT 50% OFF<Super>*</Super>   
    </Container>
  )
}

export default Announcement