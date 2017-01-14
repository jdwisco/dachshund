import React from 'react'

import { DashboardTemplate, Header } from 'components'

const DashboardPage = () => {
  return (
    <DashboardTemplate 
      header={ <Header/> } 
      weatherOverview={ <Weather/> } >
    </DashboardTemplate>
  )
}

export default DashboardPage
