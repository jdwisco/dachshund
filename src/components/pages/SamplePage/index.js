import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { PostList } from 'containers'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <PostList limit={15} />
    </PageTemplate>
  )
}

export default SamplePage
