import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, DashboardPage, HomePage, SamplePage, NotFoundPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage} />
    <Route path="/sample-page" component={SamplePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
