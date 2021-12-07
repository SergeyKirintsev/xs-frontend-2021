import React from 'react';
import styled from 'styled-components';

import Properties from '../property/Properties';

const CardEl = styled.div`
  display: flex;
  background: #FFFFFF;
  box-shadow: 0 8px 16px rgba(199, 197, 214, 0.25);
  border-radius: 12px;
  max-width: 640px;
`

const Image = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  border-radius: 12px 0 0 12px;
`;

const CardContent = styled.div`
  padding: 36px 36px 32px 48px;
  width: 100%;
`

const Name = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
`

const Card = ({props}) => {
  return (
    <>
      <CardEl>
        <Image src={props.image} alt="avatar"/>
        <CardContent>
          <Name>{props.name}</Name>
          <Properties
            props={props}
          />
        </CardContent>
      </CardEl>
    </>
  )
}

export default Card
