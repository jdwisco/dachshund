import React from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'
//import { LogoImage } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
`

const Header = (logo, props) => {
  return (
    <Wrapper {...props}>
      <LogoImage />
      <Underline />
      <Byline>{ byline }</Byline>
    </Wrapper>
  )
}

export default Header
