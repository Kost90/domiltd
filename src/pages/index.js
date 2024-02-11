import * as React from "react"
import './index.css'
import Layout from "../components/layout/Layout"
import Wellcomesec from "../ui/wellcomesec/Wellcomesec"
import Aboutsec from "../ui/aboutsec/Aboutsec"


const IndexPage = () => {
  return (
    <main>
      <Layout>
          <Wellcomesec/>
          <Aboutsec/>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
