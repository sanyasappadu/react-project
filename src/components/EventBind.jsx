import React, { Component } from 'react'

// class EventBind extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             message: 'hello'
//         }
//         {/*3rd approach binding the class constructor */ }
//         this.clickHandler = this.clickHandler.bind(this)
//     }
//     clickHandler() {
//         this.setState({
//             message: 'gud bye'
//         })
//         console.log(this);
//     }
//     render() {
//         return (
//             <div>
//                 <div>{this.state.message}</div>
//                 {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
//                 {/* <button onClick={()=>this.clickHandler()}>click</button> */}
//                 {/*3rd approach binding the class constructor */}
//                 <button onClick={this.clickHandler}>click</button>
//             </div>
//         )
//     }
// }
//4th approach
class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'hello'
        }
    }
    clickHandler=()=>{
        this.setState({
            message:'good bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>click</button>
                </div>
        )
    }
}

export default EventBind