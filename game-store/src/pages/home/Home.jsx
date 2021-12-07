import React from 'react';
import styled from 'styled-components';
import Title from '../../components/title/Title';
import bgImage from '../../assets/images/background-home.png';

const Home = styled.div`
  height: fit-content;
  font: inherit;
`

const HomeBackground = styled.div`
  display: flex;
  min-height: 777px;

  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Button = styled.button`
  font: inherit;
  font-weight: 900;
  background: #BE1FF5;
  color: white;
  border: 3px solid #BE1FF5;
  border-radius: 8px;
  padding: 10px 24px;
  margin-right: 16px;
  width: 156px;
  cursor: pointer;
`

const ButtonCatalog = styled(Button)`
  background: transparent;
  color: #BE1FF5;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.8);
  padding-left: 60px;
  padding-right: 72px;
`

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 27px;
  color: #062225;
  max-width: 550px;
  margin: 32px 0 0;
`

const Span = styled.p`
  margin-top: 64px;
`

const TitleHome = styled(Title)`
  margin-top: 204px!important;
`

const HomeScreen = () => {
  return (
    <Home>
      <HomeBackground img={bgImage}>
        <HomeContainer>
          <TitleHome
            fontSize={'48px'}
            color={'#062225'}
          >
            Add Rick<br/> to your team
          </TitleHome>
          <Paragraph>Or Morty or someone you want</Paragraph>
          <Span>
            <Button>
              Login
            </Button>
            <ButtonCatalog>
              Catalog
            </ButtonCatalog>
           </Span>
        </HomeContainer>
      </HomeBackground>
    </Home>
  )
}

export default HomeScreen
