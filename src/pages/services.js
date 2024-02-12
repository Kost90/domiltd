import React from 'react'
import Layout from '../components/layout/Layout'
import Wellsecservicespage from '../ui/wellsecservices/Wellsecservicespage'
import Contentblockservices from '../ui/wellsecservices/contentblock/Contentblockservices'

function services() {
  return (
    <Layout>
        <Wellsecservicespage/>
        <Contentblockservices/>
    </Layout>
  )
}

export default services