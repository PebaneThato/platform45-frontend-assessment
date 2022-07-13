import React from "react"
import { Stack, Typography, Box, Avatar } from "@mui/material"
import FaceSvg from "../assets/Svgs/FaceSvg"
import ArrowSvg from "../assets/Svgs/ArrowSvg"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  arrowSvg: {
    backgroundColor: "#373d40 !important",
    cursor: "pointer",
  },
}))

const ExpandController = ({ handleToggle, toggle }) => {
  const classes = useStyles()
  return (
    <Stack justifyContent="center" alignItems="center">
      <Box pt={{ xs: 10, sm: 25 }}>
        <FaceSvg />
      </Box>
      <Stack py={{ xs: 8, sm: 15, md: 4 }}>
        <Typography pb={2} variant="h4" fontWeight="bold" align="center">
          Front-end challenge!
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          align="center"
          px={{ xs: 4, md: 13 }}
          color="#373d40"
        >
          This is a design that you will need to code up and impress us
        </Typography>
      </Stack>
      <Stack pb={{ xs: 6, sm: 1 }} pt={{ sm: 30, md: 13 }}>
        <Avatar
          className={classes.arrowSvg}
          sx={{
            width: 50,
            height: 50,
          }}
          onClick={handleToggle}
        >
          <ArrowSvg toggle={toggle} />
        </Avatar>
      </Stack>
    </Stack>
  )
}

export default ExpandController
