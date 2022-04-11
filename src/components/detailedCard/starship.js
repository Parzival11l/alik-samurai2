import React, { Component } from 'react'
import { Container, Grid } from '@mui/material'

class Starship extends Component {
  render() {

    const { currentItem } = this.props

    return (
      <Container>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={6}
        >
          <Grid item>
            <h4 className='itemCard'>Model: {currentItem.model}</h4>
          </Grid>
          <Grid item>
            <h4 className='itemCard'>Manufacturer: {currentItem.manufacturer}</h4>
          </Grid>
          <Grid item>
            <h4 className='itemCard'>Class: {currentItem.starship_class}</h4>
          </Grid>
        </Grid>

      </Container>
    )
  }
}

export default Starship
