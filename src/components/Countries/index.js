import React from "react"

const Countries = ({ flag, name }) => {
  return (
    <div className="w-[160px] bg-bgPrimary flex flex-col items-center gap-4 py-3 rounded-[20px]">
      <img src={flag} alt="flag_icon" className="w-12" />
      <p className="p-large !font-bold">{name}</p>
    </div>
  )
}

export default Countries
