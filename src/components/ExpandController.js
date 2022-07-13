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
    <Stack justifyContent="center" alignItems="center" py={19}>
      <Box pb={10}>
        <FaceSvg />
      </Box>
      <Stack>
        <Typography pb={2} variant="h4" fontWeight="bold" align="center">
          Front-end challenge!
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          align="center"
          px={3}
          color="#373d40"
        >
          This is a design that you will need to code up and impress us
        </Typography>
      </Stack>
      <Stack pt={8}>
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
