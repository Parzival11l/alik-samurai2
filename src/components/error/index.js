import React from 'react'
import { Grid } from '@mui/material'

const Error = () => {
  return (
    <Grid
      container
      justifyContent='center'
      className='txt'
    >
      <Grid item xs={8}>
        <h1>BOOM!</h1>
      </Grid>
      <Grid item xs={10}>
        <h3>Возможно твоя планета была уничтожена</h3>
      </Grid>
    </Grid>
  )
}

export default Error
