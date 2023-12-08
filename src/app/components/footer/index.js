import { useTheme } from '@emotion/react'
import Div from '@jumbo/shared/Div'
import { Grid } from '@mui/material'
import React from 'react'

const Index = () => {
  const theme = useTheme()
  return (
    <>
      <Div
        className='footer-main'
        sx={{
          background: "#000",
          padding: "20px",
          marginTop: 3
        }}>
        <Div
          className='footer'
          sx={{
            mx: { sx: 2, md: 10 }
          }}>
          <h1>Footer</h1>

          <Grid container spacing={1.5} >
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h2>
                OPT TIMINGS
              </h2>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h2>
                EMERGENCY NO.
              </h2>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h2>
                NEWS & MEDIA
              </h2>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <h2>
                SPECIALITIES
              </h2>
            </Grid>
          </Grid>

          <Div
            sx={{
              borderTop: 1,
            }}>
          </Div>
          <h5 >Copyright Mahesh Chudasama 2023. All Rights Reserved.</h5>
        </Div>
      </Div>
    </>
  )
}

export default Index
