import React, { Component } from 'react'
import { axiosClient } from '../../api/api.config'
import { Grid } from '@mui/material'

//src
import Image from '../Image'
import Ripple from '../ripple'
import Error from '../error'

import './planet.css'
import '../app/app.css'

export default class RandomPlanet extends Component {

  constructor() {
    super()
    this.componentDidMount()
  }

  state = {
    id: null,
    name: null,
    population: null,
    diameter: null,
    rotationPeriod: null,
    loading: true
  }

  componentDidMount() {
    this.randomPlanet()
    this.inerval = setInterval(this.randomPlanet, 4500)
  }

  componentWillUnmount() {
    clearInterval(this.inerval)
  }

  randomPlanet = () => {

    const id = Math.floor(Math.random() * 25) + 2

    axiosClient.get(`planets/${id}/`)
      .then(res => {
        const planet = res.data
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          diameter: planet.diameter,
          rotationPeriod: planet.rotation_period,
          loading: false,
          error: false
        })
      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false
        })
      })
  }

  render() {
    const { id, name, population, diameter, rotationPeriod, loading, error } = this.state

    const spinner = loading ? <Ripple/> :
      <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className='planet'/>
    const errorIndicate = error ? <Error/> : spinner
    // { loading && <Ripple /> }
    // { !loading && <Image src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className='planet'/>}
    // { error && <Error />}
    return (
      <Grid
        container
        className='randomPlanet'
        justifyContent='center'
        alignItems='center'
        direction='row'
      >
        <Grid item md={6}>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
          >
            <Grid
              item xs={6}
              className='txt'
            >
              {name}
            </Grid>
            <Grid item xs={4} md={4}>
              {errorIndicate}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid
            container
            alignItems='center'
            direction='column'
          >
            <Grid item xs={4}>
              <h4 className='txt2'>Population: {population}</h4>
            </Grid>
            <Grid item xs={4}>
              <h4 className='txt2'>Diameter: {diameter}</h4>
            </Grid>
            <Grid item xs={4}>
              <h4 className='txt2'>Rotation Period: {rotationPeriod}</h4>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
