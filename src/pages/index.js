import * as React from "react"
import './index.css'
import Layout from "../components/layout/Layout"


const IndexPage = () => {
  return (
    <main>
      <Layout>
          <div style={{minHeight:'100vh'}}></div>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
