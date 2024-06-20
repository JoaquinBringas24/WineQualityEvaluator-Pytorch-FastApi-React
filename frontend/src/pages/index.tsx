import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Form from "../components/Form"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
  <Form></Form> 
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
