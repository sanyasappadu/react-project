import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // if (this.state.isLoggedIn) {
        //     return <div>welcome sunny</div>
        // } else {
        //     return <div>welcome guest</div>
        // }

        //     let message 
        //     if(this.state.isLoggedIn){
        //         message=<div>welcome sunny</div>
        //     } else{
        //         message=<div>welcome guest</div>
        //     }
        //     return <div>{message}</div>
        // }
        // return(
        //     this.state.isLoggedIn ? (
        //         <div>welcome sunny</div> 
        //     ) : (
        //         <div> welcome guest</div>
        //     )
        // )
        return this.state.isLoggedIn&&<div>welcome sunny</div>
    }
}
export default UserGreetings
