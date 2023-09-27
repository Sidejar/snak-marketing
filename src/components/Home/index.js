import React from "react"

import Hero from "./Hero"
import GrowingLanguage from "./growingLanguage"

function Index() {
  return (
    <div className="w-fulL">
      <div className="bg-bgPrimary pt-[25px] px-6 md:px-[100px] lg:px-[180px] mb-10">
        <Hero />
      </div>
      <div className="max-w-[1440px] mx-auto my-0 text-center px-6 md:px-[100px] lg:px-[180px] pb-20 md:pb-[128px]">
        <GrowingLanguage />
      </div>
    </div>
  )
}

export default Index
