import React, { Component } from 'react'
import { Container, Grid } from '@mui/material'

class Planet extends Component {

  render() {

    const { currentItem } = this.props

    return (
      <Container>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={8}
        >
          <Grid item>
            <h4 className='itemCard'>Diameter: {currentItem.diameter}</h4>
          </Grid>
          <Grid item>
           <h4 className='itemCard'>Population: {currentItem.population}</h4>
          </Grid>
          <Grid item>
            <h4 className='itemCard'>Gravity: {currentItem.gravity}</h4>
          </Grid>
        </Grid>

      </Container>
    )
  }
}

export default Planet
