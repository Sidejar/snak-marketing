import React from "react"

import Countries from "../Countries"

import English from "../../assets/images/icons/english.svg"
import Spanish from "../../assets/images/icons/spanish.svg"
import German from "../../assets/images/icons/german.svg"
import French from "../../assets/images/icons/french.svg"
import Danish from "../../assets/images/icons/danish.svg"
import Ukrainian from "../../assets/images/icons/ukrain.svg"

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
    <div className="flex flex-col items-center">
      <h4 className={`h4 ${"mb-[8px] md:mb-[24px]"}`}>
        Growing language support!
      </h4>
      <p
        className={`p-large ${"max-w-full md:max-w-[528px] w-full mb-[80px] md:mb-16"}`}
      >
        Right now Snack supports 6 languages: Spanish, Danish, German,
        Ukrainian, French and English.&nbsp;
        <span className="font-bold">More languages coming soon!</span>
      </p>
      <div className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-[22px] md:gap-6">
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
