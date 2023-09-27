import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div>
    {" "}
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
    </header>
  </div>
)

export default Header
