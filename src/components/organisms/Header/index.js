import React from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
import { LogoImage } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
`

const Underline = styled.div`
  width: 300px;
  border-bottom: 1px solid ${colors.grayscale[4]}
`

const Byline = styled.div`
  padding: 0.5em 0;
  font: 400 1em/100% ${fonts.primary};
  color: ${colors.grayscale[4]}
`

const Header = (logo, props) => {
  let byline = 'a happy little dachshboard for your mornings.';

  return (
    <Wrapper {...props}>
      <LogoImage />
      <Underline />
      <Byline>{ byline }</Byline>
    </Wrapper>
  )
}

export default Header
