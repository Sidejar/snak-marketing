import React from "react"

import Button from "../../utils/Button"

import AudioMessage from "../../assets/images/audio-msg.svg"
import Dot from "../../assets/images/orangeDot.svg"

const Voice = ({
  className,
  icon1,
  hiddenMsg,
  text1,
  downArrowIcon,
  icon2,
  text2,
  buttonStyling,
  cta,
  recordButton,
  audioMessage,
  type,
  disabled,
  bg,
  buttonIcon,
  buttonText,
}) => {
  return (
    <div
      className={`max-w-full md:max-w-[527px] w-full ${
        recordButton
          ? "py-[52px] md:py-[55px] lg:py-[76px] px-[49px] md:px-[55px] lg:px-[76px]"
          : "py-[48px] md:py-[34px] lg:py-[41px] px-5 md:px-[55px] lg:px-[76px]"
      } bg-bgPrimary rounded-[20px] flex flex-col items-center gap-6 ${className}`}
    >
      <div
        className={`w-full md:w-auto rounded-[22px] bg-white flex flex-col items-center gap-[22px] ${
          recordButton
            ? "pt-[15px] md:pt-6 pb-[29px] md:pb-[46px] px-[10px] md:px-[16px]"
            : "py-[33px] md:py-12 px-5 md:px-[40px] lg:px-[50px] xl:px-[70px]"
        }`}
      >
        {recordButton ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[6px]">
              <img src={Dot} alt="dot_img" />
              <p className="text-primary text-sm font-medium tracking-[-0.44px]">
                Recording ..
              </p>
            </div>
            <p className="text-grayColor text-sm font-medium tracking-[-0.44px]">
              00:01
            </p>
          </div>
        ) : (
          ""
        )}
        <span>
          {icon1 ? (
            <img src={icon1} alt="logo"></img>
          ) : (
            <p className="p-medium !font-normal py-3 px-4 rounded-[22px] bg-bgGrey1">
              {hiddenMsg ? <img src={hiddenMsg} alt="audio msg" /> : text1}
            </p>
          )}
        </span>
        {downArrowIcon && <img src={downArrowIcon} alt="downArrowIcon" />}
        <span>
          {icon2 && <span>{icon2}</span>}
          {recordButton ? (
            <Button
              recordButton={recordButton}
              noPadding
              bg={bg}
              className={buttonStyling}
              cta={cta}
              type={type}
              disabled={disabled}
              icon={buttonIcon}
              text={buttonText}
            />
          ) : audioMessage ? (
            <p className="p-medium py-3 px-4 rounded-[22px] bg-bgGrey1">
              <img src={AudioMessage} alt="logo" />
            </p>
          ) : (
            <p className="p-medium py-3 px-4 rounded-[22px] bg-bgGrey1">
              {text2}
            </p>
          )}
        </span>
      </div>
      {recordButton ? null : (
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
