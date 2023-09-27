import * as React from "react"
import { Link } from "gatsby"

import FlagComponent from "./countries"

import English from "../assets/images/icons/english.svg"
const Header = ({ flag, countryName }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <h1 className="text-red-700">
      {" "}
      Welcome to <b>Gatsby!</b>
    </h1>
    <FlagComponent flag={English} countryName="English" />
  </header>
)

export default Header
