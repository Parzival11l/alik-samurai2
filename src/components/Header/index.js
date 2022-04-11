import React, { Component } from 'react'
import { AppBar, Grid, Toolbar, Container } from '@mui/material'

import './header.css'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <Container disableGutters maxWidth={false}>
        <AppBar position='static'>
          <Toolbar disableGutters>
            <Grid
              container
              justifyContent='space-around'
              alignItems='center'
              direction='row'
              spacing={0}
              className='allHeader'
            >
              <Grid item>
                <h1 className='header'>Star DB</h1>
              </Grid>
              <Grid item>
                <NavLink to="/people" className='head-a'>People</NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/planets" className='head-a'>Planets</NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/starships" className='head-a'>Starships</NavLink>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
    )
  }
}
