import * as React from "react"
import './index.css'
import Layout from "../components/layout/Layout"
import Wellcomesec from "../ui/wellcomesec/Wellcomesec"


const IndexPage = () => {
  return (
    <main>
      <Layout>
          <Wellcomesec/>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
