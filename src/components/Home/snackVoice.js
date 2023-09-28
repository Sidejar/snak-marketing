import React from "react"

import Voice from "../SnackVoice"
import DownArrowIcon from "../../assets/images/downArrowIcon.svg"
import TranslateIcon from "../../assets/images/translateIcon.svg"
import MicLogo from "../../assets/images/mic.png"
import Audio from "../../assets/images/audio-wave.png"
import Speaker from "../../assets/images/volume.png"
import Note from "../../assets/images/note.png"

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
          className=""
          icon1={Audio}
          icon2=""
          text2="How are you doing?"
          onClick=""
          type=""
          disabled=""
          buttonIcon={MicLogo}
          buttonText=""
        />
      </div>

      {/*  */}
      <div className="flex items-center flex-col md:flex-row justify-between mb-12 md:mb-20 gap-8">
        <Voice
          className=""
          icon1=""
          text1=". . . . . . . . . . . . . . . . ."
          downArrowIcon={DownArrowIcon}
          icon2=""
          text2="How are you doing?"
          bg
          onClick=""
          type=""
          disabled=""
          buttonIcon={Speaker}
          buttonText="Repeat"
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
          className=""
          icon1=""
          text1=". . . . . . . . . . . . . . . . . . . . "
          downArrowIcon={DownArrowIcon}
          icon2=""
          text2="Hvordan har du det?"
          bg
          onClick=""
          type=""
          disabled=""
          buttonIcon={Note}
          buttonText="Transcribe"
        />
      </div>

      {/*  */}
      <div className="flex items-center flex-col md:flex-row justify-between mb-12 md:mb-20 gap-8">
        <Voice
          className=""
          icon1=""
          text1="Hvordan har du det?"
          downArrowIcon={DownArrowIcon}
          icon2=""
          text2="How are you doing?"
          bg
          onClick=""
          type=""
          disabled=""
          buttonIcon={TranslateIcon}
          buttonText="Translate"
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
