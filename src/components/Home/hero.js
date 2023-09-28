import React from "react"

import Apple from "../../assets/images/icons/Apple.svg"
import BannerImage from "../../images/banner-image.png"

function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto my-0 flex flex-col lg:flex-row justify-center gap-6 items-center">
      <div className="max-w-full lg:max-w-[435px] w-full">
        <h2 className="h2">Practice conversational language skills</h2>
        <p className={`p-large ${"mb-[40px] tracking-[0]"}`}>
          Snak is a language learning app that focuses on conversational skills
          with our AI chatbot: Snak!
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
  )
}

export default Hero
