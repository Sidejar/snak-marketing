import React from "react"

import Apple from "../../images/apple-logo.png"
import BannerImage from "../../images/banner-image.png"

function Hero() {
  return (
    <div className="flex gap-6 items-center">
      <div className="max-w-[435px] w-full">
        <h2 className="text-black text-[62px] mb-6 leading-[60px] tracking-[-2px] font-bold">
          Practice conversational language skills
        </h2>
        <p className="mb-[40px] text-black text-base font-normal">
          Snak is a language learning app that focuses on conversational skills
          with our AI chatbot: Snak!
        </p>
        <img src={Apple} alt="logo" />
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
