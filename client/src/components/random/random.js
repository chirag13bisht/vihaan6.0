import React, { Component } from 'react'

export default class random extends Component {
    state = {count:1000000000000000}

    getRandomNumber =() =>{
        const number = Math.ceil(Math.random() * 99)
        this.setState({count: number})
    }
    render() {
        const {count} = this.state
    
  return (
    <div>{this.getRandomNumber}</div>
  )
    }
}

