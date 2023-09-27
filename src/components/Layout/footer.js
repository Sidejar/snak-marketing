import React from "react"

import Snack from "../../images/snack-logo.png"
import Apple from "../../images/apple-logo.png"

function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto my-0 flex justify-between items-center px-6 md:px-[100px] lg:px-[180px] pb-[68px] md:pb-[125px]">
      <img src={Snack} alt="logo" />
      <p className="m-0 text-textColor font-normal text-xs">
        A <span className="underline">SideJar</span>&nbsp;product
      </p>
      <img src={Apple} alt="logo" />
    </div>
  )
}

export default Footer
