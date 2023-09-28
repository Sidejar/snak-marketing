import React from "react"

const Button = props => {
  const { className, cta, type, disabled, icon, text, bg, noPadding } = props
  return (
    <button
      {...props}
      className={`max-w-[136px] w-full flex items-center justify-around ${
        noPadding ? "p-0" : "py-[12px] px-4"
      } ${
        bg ? "bg-primaryBlue" : "bg-transparent"
      } rounded-[42px] ${className}`}
      onClick={e => {
        if (cta) {
          cta(e)
        }
      }}
      type={type}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="btn_icon" />}
      <p className={`p-small !font-semibold text-white`}>{text}</p>
    </button>
  )
}

export default Button
