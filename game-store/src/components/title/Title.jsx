import React from 'react';
import styled from 'styled-components';

const TitleEl = styled.h1`
  font: inherit;
  font-size: ${props => props.fontSize};
  font-weight: 800;
  line-height: 1.08;
  color: ${props => props.color};
  margin: 0;
`

const Title = ({children, ...props}) => {
  return (
    <>
      <TitleEl {...props}>
        {children}
      </TitleEl>
    </>
  )
}

export default Title
