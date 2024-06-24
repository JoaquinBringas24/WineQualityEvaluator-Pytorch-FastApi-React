import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Form from "../components/Form"
import Nav from "../components/Nav"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-rose-500 h-screen w-screen bg-opacity-85">
      <Nav></Nav>
      <div className="grid grid-cols-2">
       <img className="m-4 rounded-xl self-center justify-self-center min-w-2.5 p-10 border-4 border-black bg-yellow-950" src="https://shop.boschendalwines.com/wp-content/uploads/sites/16/2021/05/Boschendal-Stellenbosch-CabSav.jpg"></img> 
      <Form></Form> 
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
