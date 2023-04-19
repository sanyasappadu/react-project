import React, { PureComponent } from 'react'

class PureComponentDemo extends PureComponent {
  render() {
    console.log("pure comp")
    return (
      <div>PureComponent {this.props.name}
      </div>
    )
  }
}

export default PureComponentDemo