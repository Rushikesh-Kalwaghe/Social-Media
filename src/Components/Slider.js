import React from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:rgb(245, 241, 241);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props=> props.direction === 'left' && "10px"};
  right: ${props=> props.direction === 'right' && "10px"};
  cursor: pointer;
  opacity: 0.5; 
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=> props.bg};
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
` 
const Desc = styled.div`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.div`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper>
          <Slide>
            <ImgContainer>
              <Image src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </ImgContainer>
            <InfoContainer>
              <Title>SALE SALE SALE</Title>
              <Desc>FLAT 50% OFF </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src='./full-length-portrait-beautiful-happy-cute-smiling-brunette-woman-girl-casual-green-hipster-summer-clothes-isolated-white-listening-music-smartphone-with-headphones.jpg'/>
            </ImgContainer>
            <InfoContainer>
            <Title>SALE SALE SALE</Title>
              <Desc>FLAT 50% OFF </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
          <Slide>
            <ImgContainer>
              <Image src=""/>
            </ImgContainer>
            <InfoContainer>
            <Title>SALE SALE SALE</Title>
              <Desc>FLAT 50% OFF </Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
        <Arrow direction="right">
          <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
