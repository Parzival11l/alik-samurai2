import React, { Component } from 'react'
import { Container, Grid } from '@mui/material'

import './detailedCard.css'

class Person extends Component {


  render() {

    const { currentItem } = this.props

    return (
      <Container>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          spacing={13}
        >
          <Grid item>
              <h4 className='itemCard'>Height: {currentItem.height} cm</h4>
          </Grid>
          <Grid item>
            <h4 className='itemCard'>Mass: {currentItem.mass} kg</h4>
          </Grid>
          <Grid item>
            <h4 className='itemCard'>Birth year: {currentItem.birth_year}</h4>
          </Grid>
        </Grid>

      </Container>
    )
  }
}

export default Person
