import React from "react"

const Button = ({ className, onClick, type, disabled, icon, text }) => {
  return (
    <button
      className={`flex items-center gap-2 py-[12px] px-4 bg-primaryBlue rounded-[42px] ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="btn_icon" />}
      <p className="p-small !font-semibold text-white">{text}</p>
    </button>
  )
}

export default Button
