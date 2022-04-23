import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {

  render() {
    return (
      <div className='text-center'>
          <h1><img src={loading} alt="loading" /></h1>
      </div>
    )
  }
}
