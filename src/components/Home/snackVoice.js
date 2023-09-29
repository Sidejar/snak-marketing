import React from "react"

import Voice from "../SnackVoice"
import DownArrowIcon from "../../assets/images/downArrowIcon.svg"
import TranslateIcon from "../../assets/images/translateIcon.svg"
import MicLogo from "../../assets/images/mic.svg"
import Audio from "../../assets/images/audio-wave.svg"
import Speaker from "../../assets/images/volume.svg"
import Note from "../../assets/images/note.svg"
import HiddenMsgImg from "../../assets/images/hidden-msg.svg"

function SnackVoice() {
  return (
    <div className="my-[80px] md:my-[100px] lg:my-[128px]">
      {/*  */}
      <div className="flex items-center flex-col-reverse md:flex-row justify-between mb-12 md:mb-20 gap-8">
        <div className="max-w-full md:max-w-[360px] w-full flex flex-col items-start  gap-2 md:gap-6">
          <h4 className="h4">It’s time to start talking</h4>
          <p className={`p-large ${"text-left "}`}>
            Engage in conversations with Snak to see if you can understand it,
            and even more importantly, it can understand you!
          </p>
        </div>
        <Voice
          icon1={Audio}
          recordButton
          buttonIcon={MicLogo}
          buttonStyling="sm:max-w-[88px] w-full max-w-[41.5px]"
        />
      </div>

      {/*  */}
      <div className="flex items-center flex-col md:flex-row justify-between mb-12 md:mb-20 gap-8">
        <Voice
          hiddenMsg={HiddenMsgImg}
          downArrowIcon={DownArrowIcon}
          audioMessage
          bg
          buttonIcon={Speaker}
          buttonText="Repeat"
          buttonStyling="!w-[168px]"
        />
        <div className="max-w-full md:max-w-[360px] w-full flex flex-col items-start  gap-2 md:gap-6">
          <h4 className="h4">Repeat</h4>
          <p className={`p-large ${"text-left"}`}>
            Have Snak repeat what they said as many times as you need.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex items-center flex-col-reverse md:flex-row justify-between mb-12 md:mb-20 gap-8">
        <div className="max-w-full md:max-w-[360px] w-full flex flex-col items-start  gap-2 md:gap-6">
          <h4 className="h4">Transcribe</h4>
          <p className={`p-large ${"text-left"}`}>
            Still not understanding Snak? Have them write out what it is that
            they said.
          </p>
        </div>
        <Voice
          hiddenMsg={HiddenMsgImg}
          downArrowIcon={DownArrowIcon}
          text2="Hvordan har du det?"
          bg
          buttonIcon={Note}
          buttonText="Transcribe"
          buttonStyling="!w-[168px]"
        />
      </div>

      {/*  */}
      <div className="flex items-center flex-col md:flex-row justify-between gap-8">
        <Voice
          text1="Hvordan har du det?"
          downArrowIcon={DownArrowIcon}
          text2="How are you doing?"
          bg
          buttonIcon={TranslateIcon}
          buttonText="Translate"
          buttonStyling="!w-[168px]"
        />
        <div className="max-w-full md:max-w-[360px] w-full flex flex-col items-start  gap-2 md:gap-6">
          <h4 className="h4">Translate</h4>
          <p className={`p-large ${"text-left"}`}>
            Still not sure after seeing the text? We will translate it into your
            own language so that you can understand.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SnackVoice
