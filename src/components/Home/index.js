import React from "react"

import SnackVoice from "./SnakAudioVoice"
import NewsLetter from "./NewsLetter"
import Countries from "../Countries"

import English from "../../assets/images/english.svg"
import Spanish from "../../assets/images/spanish.svg"
import German from "../../assets/images/german.svg"
import MicLogo from "../../assets/images/mic.png"
import French from "../../assets/images/french.svg"
import Danish from "../../assets/images/danish.svg"
import Ukrainian from "../../assets/images/ukrain.svg"
import Apple from "../../assets/images/Apple.svg"
import BannerImage from "../../assets/images/banner-image.svg"

const CountriesName = [
  {
    logo: English,
    name: "English",
  },
  {
    logo: Spanish,
    name: "Spanish",
  },
  {
    logo: German,
    name: "German",
  },
  {
    logo: French,
    name: "French",
  },
  {
    logo: Danish,
    name: "Danish",
  },
  {
    logo: Ukrainian,
    name: "Ukrainian",
  },
]

function Index() {
  return (
    <div className="w-fulL">
      {/* Hero Banner */}
      <div className="bg-bgPrimary px-6 md:px-[60px] lg:px-[180px]">
        <div className="max-w-[1440px] mx-auto my-0 flex flex-col lg:flex-row justify-center gap-6 items-center">
          <div className="max-w-full lg:max-w-[435px] w-full">
            <h2 className="h2-medium">
              Practice conversational language skills
            </h2>
            <p className={`p-large ${"mb-8 md:mb-[40px] tracking-[0]"}`}>
              Snak is a language learning app that focuses on conversational
              skills with our AI chatbot: Snak!
            </p>
            <img
              className="max-w-full sm:max-w-[180px] w-full"
              src={Apple}
              alt="logo"
            />
          </div>
          <img
            className="max-w-[620px] w-full object-cover"
            src={BannerImage}
            alt="logo"
          />
        </div>
      </div>

      {/* Audio voice message */}
      <div className="max-w-[1440px] mx-auto my-0 text-center px-6 md:px-[60px] lg:px-[180px] pb-20 md:pb-[128px]">
        <SnackVoice />

        {/* GrowingLanguageSupport */}
        <div className="flex gap-8 md:gap-0 flex-col-reverse md:flex-col items-center">
          <div className="md:text-center text-start">
            <h4 className={`h4 ${"mb-[8px] md:mb-[24px]"}`}>
              Growing language support!
            </h4>
            <p className={`p-large ${"max-w-full md:max-w-[528px] w-full"}`}>
              Right now Snack supports 6 languages: Spanish, Danish, German,
              Ukrainian, French and English.&nbsp;
              <span className="font-bold">More languages coming soon!</span>
            </p>
          </div>
          <div className="flex items-center justify-center flex-wrap xl:flex-nowrap flex-shrink-0 sm:flex-shrink-[inherit] mt-0 md:mt-16 gap-[22px] md:gap-6">
            {CountriesName.map((item, index) => (
              <div key={index} className="">
                <Countries name={item.name} flag={item.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join our newsletter*/}
      <div className="max-w-[1440px] mx-auto my-0 px-0 md:px-[60px] lg:px-[180px]">
        <NewsLetter />
      </div>
    </div>
  )
}

export default Index
