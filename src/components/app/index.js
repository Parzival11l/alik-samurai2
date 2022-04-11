import React, { Component } from 'react'
import { Grid, Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

// src
import RandomPlanet from '../randomPlanet'
import ListItem from '../ItemList'
import Header from '../Header'
import Error from '../error/error'
import PlanetsPage from '../pages/PlanetsPage'

import './app.css'


export default class App extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    console.log(error,'Ну здравствуй')
    this.setState({ hasError: true })
  }

  render() {

    if (this.state.hasError) {
      return (
        <h1 className='boom'>Пошел нахуй!</h1>
      )
    }

    return (
      <Container disableGutters maxWidth={false}>
        <Header/>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <RandomPlanet />
              <Routes>
                <Route path="/people" element={<ListItem url='people' />} />
                <Route path="/starships" element={<ListItem url='starships' />} />
                <Route path="/planets" element={<PlanetsPage />} />
              </Routes>
            </Grid>

            <Grid item xs={12}>
              <Error/>
            </Grid>
          </Grid>
        </Container>
      </Container>
    )
  }
}
