import React, { Component } from 'react'

class ErrorBtn extends Component {

  state = {
    errorRender: false
  }


  render() {
    if(this.state.renderError){
      throw new Error('pidor')
    }
    return (
      <div>
        <button className='btn' onClick={() => this.setState({renderError:true})}>Не нажимай</button>
      </div>
    )
  }
}

export default ErrorBtn
