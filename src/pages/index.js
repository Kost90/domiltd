import * as React from "react"
import './index.css'
import Layout from "../components/layout/Layout"
import Wellcomesec from "../ui/wellcomesec/Wellcomesec"
import Aboutsec from "../ui/aboutsec/Aboutsec"
import Mainservices from "../ui/mainservices/Mainservices"
import Services from "../ui/servicessec/Services"
import Whychoosesec from "../ui/whychoosesec/Whychoosesec"


const IndexPage = () => {
  return (
    <main>
      <Layout>
          <Wellcomesec/>
          <Aboutsec/>
          <Mainservices/>
          <Services/>
          <Whychoosesec/>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
