import React from "react"

const CalendarSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#B1BFCD"
          strokeLinecap="square"
          strokeWidth="2.442"
          d="M2 3.602h15.87v14.407H2z"
        />
        <path
          stroke="#B1BFCD"
          strokeLinecap="square"
          strokeWidth="4.885"
          d="M3.22 6.003H16.65"
        />
        <path stroke="#F5F8F9" strokeWidth="4.885" d="M14.207 0v6.003" />
        <path stroke="#B1BFCD" strokeWidth="2.442" d="M14.207 0v4.802" />
        <g>
          <path stroke="#F5F8F9" strokeWidth="4.885" d="M5.662 0v6.003" />
          <path stroke="#B1BFCD" strokeWidth="2.442" d="M5.662 0v4.802" />
        </g>
      </g>
    </svg>
  )
}

export default CalendarSvg
