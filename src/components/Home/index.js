import React from "react"

import Hero from "./hero"
import SnackVoice from "./snackVoice"
import GrowingLanguage from "./growingLanguage"
import NewsLetter from "./NewsLetter"

function Index() {
  return (
    <div className="w-fulL">
      <div className="bg-bgPrimary px-6 md:px-[60px] lg:px-[180px]">
        <Hero />
      </div>
      <div className="max-w-[1440px] mx-auto my-0 text-center px-6 md:px-[60px] lg:px-[180px] pb-20 md:pb-[128px]">
        <SnackVoice />
        <GrowingLanguage />
      </div>
      <div className="max-w-[1440px] mx-auto my-0 px-6 md:px-[60px] lg:px-[180px]">
        <NewsLetter />
      </div>
    </div>
  )
}

export default Index
