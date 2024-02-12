import React from 'react'
import Layout from '../components/layout/Layout'
import Contactsec from '../ui/contactsec/Contactsec'
import Seo from '../components/seo/Seo'

function contactus() {
  return (
    <Layout pageTitle='Contact Us'>
        <Contactsec/>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact us page" />

export default contactus