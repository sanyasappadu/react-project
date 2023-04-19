import React, { Component } from 'react'
import { UsreConsumer } from './UserContext'

export class ComponentC extends Component {
  render() {
    return (
        <UsreConsumer>
            {
                (username)=>{
                    return <div>Hello {username} </div>
                }
            }
        </UsreConsumer>
    )
  }
}

export default ComponentC