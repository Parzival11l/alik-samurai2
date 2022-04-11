import React, { Component } from 'react'
import { Grid } from '@mui/material'

//src
import Image from '../Image'
import PersonDetailedCard from '../detailedCard/person'
import PlanetDetailedCard from '../detailedCard/planet'
import StarshipDetailedCard from '../detailedCard/starship'

import '../app/app.css'
import './person.css'

export default class CurrentPerson extends Component {


  state = {
    url1: ''
  }

  componentDidMount() {
    const { url } = this.props

    if (url === 'people') {
      this.setState({ url1: 'characters' })
    } else {
      this.setState({ url1: url })
    }
  }

  render() {

    const { currentItem, id } = this.props
    const { url1 } = this.state

    const itemDetailedCard = (url1) => {
      switch (url1) {
        case 'characters':
          return <PersonDetailedCard currentItem={currentItem}/>
        case 'planets':
          return <PlanetDetailedCard currentItem={currentItem}/>
        case 'starships':
          return <StarshipDetailedCard currentItem={currentItem}/>
        default:
          return null

      }
    }

    return (
      <Grid
        container
        direction='row'
      >
        <Grid item xs={5}>
          <Grid
            container
            direction='column'
            justifyContent='center'
          >
            <Grid item>
              <h1
                align='center'
                className='txt'
              >
                {currentItem.name}
              </h1>
            </Grid>

            <Grid item>
              <Image
                className='image'
                src={`https://starwars-visualguide.com/assets/img/${url1}/${id}.jpg`}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item xs={7}
          marginTop={2}
          marginBottom={2}
        >
          <Grid
            container
            alignItems='center'
            justifyContent='center'
          >
            <Grid item> {itemDetailedCard(url1)}</Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }}

