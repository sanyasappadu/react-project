// import React,{ Component } from 'react';
// class Welcome extends Component {
//     render(){
//         return  <h2>welcome {this.props.name} a.k.a {this.props.heroName}</h2>
//     }
// }
// export default Welcome;
//destructing state 1
import React,{ Component } from 'react';
class Welcome extends Component {
    
    render(){
        const {name,heroName}=this.props;
        return (
            <h2>welcome {name} a.k.a {heroName}</h2>
        )
    }
}
export default Welcome;