import React from 'react'

import { MainPageTemplate, Header } from 'components'

const DashboardPage = () => {
  return (
    <MainPageTemplate header={ <Header/> }>
      <Header>{ header }</Header>
    </MainPageTemplate>
  )
}

export default DashboardPage
