import React from "react"

const Countries = ({ flag, countryName }) => {
  return (
    <div className="w-[160px] bg-[##F0F4FF] flex flex-col justify-center gap-4 py-3">
      <img src={flag} alt="flag_icon" className="w-12" />
      <p>{countryName}</p>
    </div>
  )
}

export default Countries
