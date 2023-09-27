import React from "react"

import Snack from "../../images/snack-logo.png"
import Apple from "../../images/apple-logo.png"

function Footer() {
  return (
    <div className="flex justify-between items-center">
      <img src={Snack} alt="logo" />
      <p className="m-0 text-textColor font-normal text-xs">
        A <span className="underline">SideJar</span>&nbsp;product
      </p>
      <img src={Apple} alt="logo" />
    </div>
  )
}

export default Footer
