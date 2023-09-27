import * as React from "react"
import { Link } from "gatsby"

import FlagComponent from "./countries"
import Voice from "./voice"
import DownArrowIcon from "../assets/images/icons/downArrowIcon.svg"

import English from "../assets/images/icons/english.svg"
import TranslateIcon from "../assets/images/icons/translateIcon.svg"
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
    <Voice
      className=""
      icon1=""
      text1="Hvordan har du det?"
      downArrowIcon={DownArrowIcon}
      icon2=""
      text2="How are you doing?"
      buttonStyling=""
      onClick=""
      type=""
      disabled=""
      buttonIcon={TranslateIcon}
      buttonText="Translate"
    />
  </header>
)

export default Header
