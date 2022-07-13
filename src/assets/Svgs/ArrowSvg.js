import React from "react"
import { useTheme } from "@mui/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
const ArrowSvg = ({ toggle }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      {isSmallScreen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="25"
          viewBox="0 0 17 29"
          style={{
            transform: toggle ? "rotate(90deg)" : "rotate(270deg)",
          }}
        >
          <path
            fill="#FFD300"
            fill-rule="evenodd"
            d="M16.969 14.502c0-.519-.195-1.038-.585-1.433L4.128.619a1.974 1.974 0 0 0-2.823 0 2.05 2.05 0 0 0 0 2.867L12.15 14.502 1.306 25.518a2.05 2.05 0 0 0 0 2.867c.78.793 2.043.793 2.823 0l12.256-12.45a2.04 2.04 0 0 0 .584-1.433"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="25"
          viewBox="0 0 17 29"
          style={{
            transform: toggle ? "rotate(0deg)" : "rotate(180deg)",
          }}
        >
          <path
            fill="#FFD300"
            fill-rule="evenodd"
            d="M16.969 14.502c0-.519-.195-1.038-.585-1.433L4.128.619a1.974 1.974 0 0 0-2.823 0 2.05 2.05 0 0 0 0 2.867L12.15 14.502 1.306 25.518a2.05 2.05 0 0 0 0 2.867c.78.793 2.043.793 2.823 0l12.256-12.45a2.04 2.04 0 0 0 .584-1.433"
          />
        </svg>
      )}
    </>
  )
}

export default ArrowSvg
