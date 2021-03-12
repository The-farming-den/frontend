import React from 'react';
import { Heading } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'

const Team: React.FC = () => {
  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        Roadmap
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        The roadmap is coming soon
      </Heading>
    </Page>
  )
}

export default Team;