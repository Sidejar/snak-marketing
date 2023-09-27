/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-bgPrimary">
      <div className="max-w-[1440px] mx-auto my-0 pt-[25px] px-6 md:px-[100px] lg:px-[180px] pb-10">
        <Header />
        <div className="">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
