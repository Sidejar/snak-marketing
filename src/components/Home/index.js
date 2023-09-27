import React from "react"

import Hero from "./Hero"
import SnackVoice from "./snackVoice"
import GrowingLanguage from "./growingLanguage"
import NewsLetter from "./NewsLetter"

function Index() {
  return (
    <div className="w-fulL">
      <div className="bg-bgPrimary pt-[25px] px-6 md:px-[100px] lg:px-[180px]">
        <Hero />
      </div>
      <div className="max-w-[1440px] mx-auto my-0 text-center px-6 md:px-[100px] lg:px-[180px] pb-20 md:pb-[128px]">
        <SnackVoice />
        <GrowingLanguage />
        <NewsLetter />
      </div>
    </div>
  )
}

export default Index
