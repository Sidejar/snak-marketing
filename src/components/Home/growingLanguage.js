import React from "react"

import Countries from "../Countries"

import English from "../../assets/images/english.svg"
import Spanish from "../../assets/images/spanish.svg"
import German from "../../assets/images/german.svg"
import French from "../../assets/images/french.svg"
import Danish from "../../assets/images/danish.svg"
import Ukrainian from "../../assets/images/ukrain.svg"

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

function GrowingLanguage() {
  return (
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
  )
}

export default GrowingLanguage
