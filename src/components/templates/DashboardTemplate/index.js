import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, animations } from 'components/globals'
//import { Header, WeatherOverview, GoogleApps, TenDayForecast } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.section`
  background: ${colors.grayscale[0]};
`

const WeatherOverview = styled.section`
  background: ${colors.grayscale[0]};
  height: 100px;
`

const GoogleApps = styled.section`
  background: blue;
  height: 100px;
`

const TenDayForecast = styled.section`
  background: green;
  height: 100px;
`

const DashboardTemplate = ({header, weatherOverview, googleApps, tenDayForecast, children, ...props }) => {
  return (
    <Wrapper>
      <Header>{ header }</Header>
      <WeatherOverview>{ weatherOverview }</WeatherOverview>
      <GoogleApps>{ googleApps }</GoogleApps>
      <TenDayForecast>{ tenDayForecast }</TenDayForecast>
    </Wrapper>
  )
}

DashboardTemplate.propTypes = {
  children: PropTypes.any.isRequired
}

export default DashboardTemplate
