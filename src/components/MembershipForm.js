import React, { useState } from "react"
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ExpandController from "./ExpandController"
import Form from "./Form"
import MyWorld from "./MyWorld"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"

const useStyles = makeStyles((theme) => ({
  expandController: {
    backgroundColor: "#ffd300",
    [theme.breakpoints.up("sm")]: {
      borderRadius: "30px 0px 0px 30px !important",
    },
  },

  myWorld: {
    backgroundColor: "#ff9200",
    [theme.breakpoints.up("sm")]: {
      borderRadius: "0px 30px 30px 0px !important",
    },
  },
}))
const MembershipForm = () => {
  const [toggle, setToggle] = useState(true)
  const [active, setActive] = useState("")

  const handleToggle = () => {
    setToggle(!toggle)
  }
  const onCardClick = (param) => {
    setActive(param)
  }
  const classes = useStyles()

  return (
    <Grid container px={4} py={6}>
      <Grid item xs={12} sm={4} className={classes.expandController}>
        <ExpandController handleToggle={handleToggle} toggle={toggle} />
      </Grid>
      {toggle ? (
        <Grid item xs={12} sm={8}>
          <Slide left>
            <Form
              onCardClick={onCardClick}
              active={active}
              setActive={setActive}
            />
          </Slide>
        </Grid>
      ) : (
        <Grid item xs={12} sm={8} className={classes.myWorld}>
          <Fade left>
            <MyWorld />
          </Fade>
        </Grid>
      )}
    </Grid>
  )
}

export default MembershipForm
