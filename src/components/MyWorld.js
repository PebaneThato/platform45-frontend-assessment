import { Grid, Typography } from "@mui/material"
import React from "react"

const MyWorld = () => {
  return (
    <Grid container py={8} justifyContent="center">
      <Grid item xs={8} pt={10} pb={30}>
        <>
          <Typography variant="h4" fontWeight="bold">
            My world today
          </Typography>
          <Typography variant="body1" pt={4}>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. <u><b>View all days</b></u> eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
            orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
            pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus,
            tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
            erat
          </Typography>
        </>
      </Grid>
    </Grid>
  )
}

export default MyWorld
