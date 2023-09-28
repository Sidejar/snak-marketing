import React from "react"
import Dot from "../../assets/images/orangeDot.svg"
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
  btn,
  type,
  disabled,
  bg,
  buttonIcon,
  buttonText,
}) => {
  return (
    <div
      className={`max-w-full md:max-w-[527px] w-full ${
        btn
          ? "py-[52px] md:py-[55px] lg:py-[76px] px-[49px] md:px-[55px] lg:px-[76px]"
          : "py-[48px] md:py-[34px] lg:py-[41px] px-5 md:px-[55px] lg:px-[76px]"
      } bg-bgPrimary rounded-[20px] flex flex-col items-center gap-6 ${className}`}
    >
      <div
        className={`w-full md:w-auto rounded-[22px] bg-white flex flex-col items-center gap-[22px] ${
          btn
            ? "pt-[15px] md:pt-6 pb-[29px] md:pb-[46px] px-[10px] md:px-[16px]"
            : "py-[33px] md:py-12 px-5 md:px-[40px] lg:px-[50px] xl:px-[70px]"
        }`}
      >
        {btn ? (
          <div className="flex items-center justify-between p-medium !leading-[18px] !tracking-[-0.44px] w-full">
            <div className="flex items-center gap-[6px]">
              <img src={Dot} alt="dot_img" />
              <p className="">Recording</p>
            </div>
            <p>00:01</p>
          </div>
        ) : (
          ""
        )}
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
          {btn ? (
            <Button
              noPadding
              bg={bg}
              className={buttonStyling}
              cta={cta}
              type={type}
              disabled={disabled}
              icon={buttonIcon}
              text={buttonText}
            />
          ) : (
            <p className="p-medium  py-3 px-4 rounded-[22px] bg-bgPrimary">
              {text2}
            </p>
          )}
        </span>
      </div>
      {btn ? null : (
        <Button
          bg={bg}
          className={buttonStyling}
          cta={cta}
          type={type}
          disabled={disabled}
          icon={buttonIcon}
          text={buttonText}
        />
      )}
    </div>
  )
}

export default Voice
