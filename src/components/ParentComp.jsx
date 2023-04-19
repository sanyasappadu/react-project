import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp';
import PureComponentDemo from './PureComponentDemo';
import MemoComp from './MemoComp';

export class ParentComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: 'sunny'
    }
  }
  componentDidMount() {
    console.log('comp1')
    setInterval(() => {
      this.setState({
        name: 'sunny'
      })
    }, 2000);
  }
  render() {
    console.log("*******************parent component********************")
    return (
      <div>
        Parent Copmonrnt
        <MemoComp />
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComponentDemo name={this.state.name}></PureComponentDemo> */}
      </div>
    )
  }
}

export default ParentComp