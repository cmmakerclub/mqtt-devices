import React, { Component } from 'react'
import Connection from './components/Connection.js'
import store from './flux/Store'
import Filter from './components/Filter'
import Content from './components/Content'
import logo from './assets/cmmc-logo.png'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      connection: false,
      hiddenDiv: 'none'
    }

    store.addListener(() => {
      let storeData = store.state.messageArrived
      let devices = []

      Object.keys(storeData).forEach((myName) => {
        devices.push(storeData[myName])
      })

      this.setState({
        messages: devices,
        connection: store.state.connection
      })

      if (this.state.connection && this.state.messages.length === 0) {
        this.setState({hiddenDiv: 'block'})
      } else {
        this.setState({hiddenDiv: 'none'})
      }

    })
  }

  render () {
    return (
      <div className="container">
        <div className="row" style={{marginTop: 20}}>
          <div className="col-12 col-md-12">
            <img src={logo} style={{height: 40, marginBottom: 20}} alt=""/>
          </div>
          <Filter connection={this.state.connection}/>
          <Connection/>
          <Content hiddenDiv={this.state.hiddenDiv}/>
        </div>
      </div>
    )
  }
}

export default App
