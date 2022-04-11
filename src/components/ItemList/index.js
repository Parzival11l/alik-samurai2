import React, { Component } from 'react'
import { axiosClient } from '../../api/api.config'
import { Grid } from '@mui/material'



import CurrentItem from './currentItem'

import '../app/app.css'
import './person.css'
import Ripple from '../ripple'


export default class ListItem extends Component {

  constructor() {
    super()
    this.componentDidMount()
    this.setPerson()
  }

  componentDidMount() {

    if (this.props) {
      const { url } = this.props
      this.getItems(url)
    }

  }

  state = {
    id: null,
    loading: true,
    items: [],
    currentItem: {},
    onItem: false,
    onVisible: false,
    onLoadingItem: true,
    hasError: false,
    item: {}
  }

  getItems(url) {
    axiosClient.get(`${url}?per=100`)
      .then(res => {
        const item = res.data
        this.setState({ items: item.results, loading: false })

      })
      .catch(err => {
        this.setState({
          error: true,
          loading: false
        })
      })

  }

  setPerson = (url, id = 10) => {
    axiosClient.get(`${url}/${id}`)
      .then(res => {
        const randomItem = res
        this.setState({
          currentItem: randomItem.data,
          onLoadingItem: false
        })
      })
      .catch(err => {
        this.setState({
          error: true
        })
        console.log('error')
      })

  }

  componentDidCatch(error, errorInfo) {
    console.log('Ну здравствуй')
    this.setState({ hasError: true })
  }

  render() {

    const { url } = this.props

    if (this.state.hasError) {
      return (
        <h1 className='boom'>Пошел нахуй!</h1>
      )
    }
    const { items, currentItem } = this.state
    const idRegExp = /\/([0-9]*)\/$/
    const visibleCurrentItem = this.state.onLoadingItem ?
      null :
      <CurrentItem
        id={currentItem.url.match(idRegExp)[1]}
        currentItem={currentItem}
        url={url}
        loading={this.state.loading}
      />
    const visibleAllItem = this.state.loading ? <Ripple /> : items.map
    ((item, index) => {
      const idx = item.url.match(idRegExp)[1]
      return (
        <a
          onClick={() => this.setPerson(url, idx)}
          className='txtListPerson'
          key={item.name}
        >
          {index + 1}. {item.name}</a>
      )
    })

    return (
        <Grid
          container
          className='listItem'
        >
          <Grid
            item xs={4}
          >
            {visibleAllItem}
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              justifyContent='center'
            >
              <Grid
                item
                margin={1}
                className='currentItem'>
                {visibleCurrentItem}
              </Grid>
            </Grid>
          </Grid>

        </Grid>

    )
  }
}
