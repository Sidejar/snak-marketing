import React from "react"

import DropDown from "../../../utils/DropDown"
import Button from "../../../utils/Button"

const NewsLetter = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-0 rounded-[20px] py-16 px-6 bg-bgPrimary flex flex-col items-center gap-8">
      <div>
        <h4 className="h4 mb-4">Join our newsletter</h4>
        <p className={`p-large ${"text-center !tracking-normal"}`}>
          Get daily emails with word of the day!
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 md:max-w-[343px] w-full">
        <DropDown />
        <input
          type="email"
          placeholder="Your email"
          className="rounded-[14px] bg-white p-[14px] w-full focus:outline-none focus:ring-0"
        />
        <Button
          className="!py-[13px] !rounded-[14px] px-[27px] max-w-full md:max-w-[128px] w-full flex justify-center"
          cta={() => {}}
          type=""
          bg
          disabled=""
          icon=""
          text="Subscribe"
        />
      </div>
    </div>
  )
}

export default NewsLetter
