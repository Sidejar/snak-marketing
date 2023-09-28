import React from "react"

import Snack from "../../images/snack-logo.png"
import Apple from "../../assets/images/icons/Apple.svg"

function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto my-0 flex flex-wrap md:flex-nowrap gap-12 md:gap-0 justify-center md:justify-between items-center px-6 md:px-[60px] lg:px-[180px] pb-[68px] md:pb-[100px] lg:pb-[125px]">
      <img src={Snack} alt="logo" />
      <p className="m-0 text-textColor font-normal text-xs">
        A <span className="underline">SideJar</span>&nbsp;product
      </p>
      <img className="max-w-[124.62px] w-full" src={Apple} alt="logo" />
    </div>
  )
}

export default Footer
