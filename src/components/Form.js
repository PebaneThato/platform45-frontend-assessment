import React from "react"
import {
  Grid,
  Stack,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import FemaleSvg from "../assets/Svgs/FemaleSvg"
import CalendarSvg from "../assets/Svgs/CalendarSvg"
import CardSvg from "../assets/Svgs/CardSvg"
import CardWhiteSvg from "../assets/Svgs/CardWhiteSvg"
import FemaleWhiteSvg from "../assets/Svgs/FemaleWhiteSvg"

const useStyles = makeStyles((theme) => ({
  inPutField: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ffd300",
      },
    },
  },
  cancelButton: {
    [theme.breakpoints.up("sm")]: {
      width: "30% !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    padding: "15px 0px 15px 0px !important",
    backgroundColor: "#f5f8f9 !important",
    color: "#373d40 !important",
    boxShadow: "none !important",
  },
  saveButton: {
    [theme.breakpoints.up("sm")]: {
      width: "30% !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    padding: "15px 0px 15px 0px !important",
    textTransform: "capitalize !important",
    backgroundColor: "#49c8a8 !important",
    boxShadow: "none !important",
  },
  form: {
    backgroundColor: "#fff",
    [theme.breakpoints.up("sm")]: {
      borderRadius: "0px 30px 30px 0px !important",
    },
  },
  activeBg: {
    backgroundColor: "#cad7dd !important",
    cursor: "pointer",
  },
  nonActiveBg: {
    backgroundColor: " #f5f8f9 !important",
    cursor: "pointer",
  },
}))
const Form = ({ onCardClick, active, setActive }) => {
  const [values, setValues] = React.useState({
    name: "",
    dateofBirth: "",
    email: "",
    mobile: "",
    customerId: "",
  })
  const [activeGender, setActiveGender] = React.useState("")
  const handleInputs = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const clearInputs = (e) => {
    setValues({
      name: "",
      dateofBirth: "",
      email: "",
      mobile: "",
      customerId: "",
    })
    setActive("")
    setActiveGender("")
  }
  const onGenderClick = (param) => {
    setActiveGender(param)
  }
  const classes = useStyles()

  return (
    <Grid container py={10} justifyContent="center" className={classes.form}>
      <Grid item xs={12} md={8}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography variant="body1" color="#373d40">
              Name
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              size="medium"
              fullWidth
              className={classes.inPutField}
              value={values.name}
              onChange={handleInputs}
              name="name"
            />
          </Grid>
        </Stack>
        <Stack
          pt={3}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography variant="body1" color="#373d40">
              Gender
            </Typography>
          </Grid>
          <Grid item xs={8} display="flex">
            <Stack direction="row" spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  className={
                    activeGender === "male"
                      ? classes.activeBg
                      : classes.nonActiveBg
                  }
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                  onClick={() => onGenderClick("male")}
                >
                  {activeGender === "male" ? <FemaleWhiteSvg /> : <FemaleSvg />}
                </Avatar>
                <Typography variant="body1" color="#cad7dd">
                  Male
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  className={
                    activeGender === "female"
                      ? classes.activeBg
                      : classes.nonActiveBg
                  }
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                  onClick={() => onGenderClick("female")}
                >
                  {activeGender === "female" ? (
                    <FemaleWhiteSvg />
                  ) : (
                    <FemaleSvg />
                  )}
                </Avatar>
                <Typography variant="body1" color="#cad7dd">
                  Female
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
          pt={3}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="#373d40">
              Date of Birth
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              className={classes.inPutField}
              size="medium"
              fullWidth
              value={values.dateofBirth}
              onChange={handleInputs}
              name="dateofBirth"
              InputProps={{
                endAdornment: <CalendarSvg />,
              }}
            />
          </Grid>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
          pt={3}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="#373d40">
              Email
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              size="medium"
              fullWidth
              className={classes.inPutField}
              value={values.email}
              onChange={handleInputs}
              name="email"
            />
          </Grid>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
          pt={3}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="#373d40">
              Mobile
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              size="medium"
              fullWidth
              className={classes.inPutField}
              value={values.mobile}
              onChange={handleInputs}
              name="mobile"
            />
          </Grid>
        </Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
          pt={3}
        >
          <Grid item sx={12} md={4}>
            <Typography variant="body1" color="#373d40">
              Customer ID
            </Typography>
          </Grid>
          <Grid item sx={12} md={8}>
            <TextField
              size="medium"
              fullWidth
              className={classes.inPutField}
              value={values.customerId}
              onChange={handleInputs}
              name="customerId"
            />
          </Grid>
        </Stack>
        <Stack
          pt={5}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          px={4}
          spacing={1}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body1" color="#373d40">
              Membership
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} display="flex">
            <Stack direction={{ xs: "column", lg: "row" }} spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  className={
                    active === "card1" ? classes.activeBg : classes.nonActiveBg
                  }
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                  onClick={() => onCardClick("card1")}
                >
                  {active === "card1" ? <CardWhiteSvg /> : <CardSvg />}
                </Avatar>
                <Typography variant="body1" color="#cad7dd">
                  Classic
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  className={
                    active === "card2" ? classes.activeBg : classes.nonActiveBg
                  }
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                  onClick={() => onCardClick("card2")}
                >
                  {active === "card2" ? <CardWhiteSvg /> : <CardSvg />}
                </Avatar>
                <Typography variant="body1" color="#cad7dd">
                  Silver
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  className={
                    active === "card3" ? classes.activeBg : classes.nonActiveBg
                  }
                  sx={{
                    width: 50,
                    height: 50,
                  }}
                  onClick={() => onCardClick("card3")}
                >
                  {active === "card3" ? <CardWhiteSvg /> : <CardSvg />}
                </Avatar>
                <Typography variant="body1" color="#cad7dd">
                  Gold
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Stack>
        <Grid item xs={4}></Grid>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="flex-end"
          alignItems={{ xs: "center" }}
          spacing={2}
          pt={6}
          px={4}
        >
          <Button
            variant="contained"
            size="large"
            className={classes.cancelButton}
            onClick={clearInputs}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.saveButton}
          >
            Save
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Form
