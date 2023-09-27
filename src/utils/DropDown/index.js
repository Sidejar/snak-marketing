import React from "react"

import icon from "../../assets/images/icons/dropDownIcon.svg"

const DropDown = () => {
  return (
    <button
      type="button"
      class="inline-flex w-full justify-between items-center rounded-[14px] bg-white px-[14px] py-[13px] "
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
    >
      <p className="p-large !leading-[22px]">Select language</p>
      <img src={icon} alt="btn_icon" />
    </button>
  )
}

export default DropDown
