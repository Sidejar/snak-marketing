import React from "react"

const Button = props => {
  const {
    className,
    cta,
    type,
    disabled,
    icon,
    text,
    bg,
    noPadding,
    recordButton,
  } = props
  return (
    <button
      {...props}
      className={` w-full flex items-center gap-[34px] ${
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
      {icon && (
        <img
          className={`${recordButton ? " w-full max-w-[fit-content]" : ""}`}
          src={icon}
          alt="btn_icon"
        />
      )}
      <p
        className={
          icon
            ? "p-small !font-semibold text-white"
            : "p-large !font-semibold text-white"
        }
      >
        {text}
      </p>
    </button>
  )
}

export default Button
