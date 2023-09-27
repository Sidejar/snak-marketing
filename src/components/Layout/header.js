import * as React from "react"

import Snack from "../../images/snack-logo.png"
import Apple from "../../images/apple-logo.png"

const Header = () => (
  <div className="flex justify-between items-center pb-10">
    <img src={Snack} alt="logo" />
    <img src={Apple} alt="logo" />
  </div>
)

export default Header
