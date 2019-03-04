import React, { Component } from 'react'

class Simon extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="simon">
        <div className="light light_tl"></div>
        <div className="light light_tr"></div>
        <div className="light light_bl"></div>
        <div className="light light_br"></div>
      </div>
    )
  }
}

export default Simon
