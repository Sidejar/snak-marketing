import React from "react"

import DropDown from "../../utils/DropDown"
import Button from "../../utils/Buttons"

const NewsLetter = () => {
  return (
    <div className="rounded-[20px] py-16 px-6 bg-bgPrimary flex flex-col items-center gap-8">
      <div>
        <h4 className="h4 mb-4">Join our newsletter</h4>
        <p className="p-large">Get daily emails with word of the day!</p>
      </div>
      <div className="flex flex-col items-center gap-4 md:max-w-[343px] w-full">
        <DropDown />
        <input
          type="email"
          placeholder="Your email"
          className="rounded-[14px] bg-white p-[14px] w-full focus:outline-none focus:ring-0"
        />
        <Button
          className="!py-[13px] md:w-[128px] w-full flex justify-center"
          onClick={() => {}}
          type=""
          disabled=""
          icon=""
          text="Subscribe"
        />
      </div>
    </div>
  )
}

export default NewsLetter
