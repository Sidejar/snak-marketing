import * as React from "react"

import Snack from "../../images/snack-logo.png"
import Apple from "../../assets/images/icons/Apple.svg"

const Header = () => (
  <div className="w-full bg-bgPrimary">
    <div className="max-w-[1440px] mx-auto my-0 flex justify-between items-center pt-[25px] px-6 md:px-[60px] lg:px-[180px] pb-10">
      <img src={Snack} alt="logo" />
      <img className="max-w-[124.62px] w-full" src={Apple} alt="logo" />
    </div>
  </div>
)

export default Header
