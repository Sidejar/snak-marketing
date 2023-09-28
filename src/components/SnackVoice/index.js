import React from "react"

import Button from "../../utils/Button"

const Voice = ({
  className,
  icon1,
  text1,
  downArrowIcon,
  icon2,
  text2,
  buttonStyling,
  cta,
  type,
  disabled,
  bg,
  buttonIcon,
  buttonText,
}) => {
  return (
    <div
      className={`max-w-full md:max-w-[527px] w-full py-[48px] md:py-[55px] lg:py-[76px] px-5 md:px-[34px] lg:px-[41px] pt-[76px] bg-bgPrimary rounded-[20px] flex flex-col items-center gap-6 ${className}`}
    >
      <div className="w-full md:w-auto rounded-[22px] bg-white py-12 px-5 md:px-[40px] lg:px-[50px] xl:px-[108px] flex flex-col items-center gap-[22px]">
        <span>
          {icon1 ? (
            <img src={icon1} alt="logo"></img>
          ) : (
            <p className="p-medium !font-normal py-3 px-4 rounded-[22px] bg-bgPrimary">
              {text1}
            </p>
          )}
        </span>
        {downArrowIcon && <img src={downArrowIcon} alt="downArrowIcon" />}
        <span>
          {icon2 && <span>{icon2}</span>}
          <p className="p-medium  py-3 px-4 rounded-[22px] bg-bgPrimary">
            {text2}
          </p>
        </span>
      </div>
      <Button
        bg={bg}
        className={buttonStyling}
        cta={cta}
        type={type}
        disabled={disabled}
        icon={buttonIcon}
        text={buttonText}
      />
    </div>
  )
}

export default Voice
