import React from 'react'
import Layout from '../components/layout/Layout'
import Wellcaboutuspage from '../ui/wellsecaboutuspage/Wellcaboutuspage'
import Contentblock from '../ui/wellsecaboutuspage/contentblock/Contentblock'

function aboutus() {
  return (
    <Layout>
        <Wellcaboutuspage/>
        <Contentblock/>
    </Layout>
  )
}

export default aboutus