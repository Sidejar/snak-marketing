import React, { useState } from "react"
import Icon from "../../assets/images/icons/dropDownIcon.svg"

const SelectDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Select language")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsMenuOpen(false)
  }

  const options = ["English", "Spanish", "French", "German"]

  return (
    <div className="relative inline-block text-left w-full p-large !leading-[22px]">
      <div>
        <button
          type="button"
          className="inline-flex border border-solid border-bgGrey w-full justify-between items-center rounded-[14px] bg-white px-[14px] py-[13px] focus:outline-none focus:ring-0"
          id="menu-button"
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
          onClick={toggleMenu}
        >
          {selectedOption}
          <img src={Icon} alt="btn_icon" />
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="absolute right-0 z-10 w-full rounded-[14px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a
                href="javascript:void(0)"
                key={index}
                className="block px-4 py-2 hover:bg-bgPrimary"
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectDropdown
