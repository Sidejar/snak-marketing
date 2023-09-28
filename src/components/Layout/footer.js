import React from "react"

import Snack from "../../assets/images/snack-logo.png"
import Apple from "../../assets/images/Apple.svg"

function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto sm:mt-[130px] mt-12 mb-0 flex flex-wrap md:flex-nowrap justify-between items-center px-6 md:px-[60px] lg:px-[180px] pb-[68px] md:pb-[100px] lg:pb-[125px]">
      <img src={Snack} alt="logo" />
      <img
        className="block md:hidden max-w-[124.62px] w-full"
        src={Apple}
        alt="logo"
      />
      <p className="hidden md:block m-0 text-textColor font-normal text-xs ml-[23px]">
        A <span className="underline">SideJar</span>&nbsp;product
      </p>
      <img
        className="hidden md:block max-w-[124.62px] w-full"
        src={Apple}
        alt="logo"
      />
      <p className="block md:hidden pt-12 text-center md:text-left w-full md:w-auto m-0 text-textColor font-normal text-xs">
        A <span className="underline">SideJar</span>&nbsp;product
      </p>
    </div>
  )
}

export default Footer
