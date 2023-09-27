import React from "react"

const Button = ({ className, onClick, type, disabled, icon, text, bg }) => {
  return (
    <button
      className={`max-w-full md:max-w-[136px] w-full flex items-center justify-around gap-2 py-[12px] px-4 ${
        bg ? "bg-primaryBlue" : "bg-transparent"
      } rounded-[42px] ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="btn_icon" />}
      <p className={`p-small !font-semibold text-white`}>{text}</p>
    </button>
  )
}

export default Button
