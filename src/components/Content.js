import React, {Component} from 'react'
import loading from '../assets/loading-2.gif'
import Devices from './Devices'
// import DevicesTest from './DevicesTest'

export default class Content extends Component {

  render () {
    return (
      <div className='col-12 col-md-12'>
        <div className="form-group">
          <div style={{display: this.props.hiddenDiv}} className='text-right'>
            Please wait a few minute&ensp;<img src={loading} style={{width: 30}} alt=""/>
          </div>
          <Devices store={this.props.store}/>
        </div>
      </div>
    )
  }

}