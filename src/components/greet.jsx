import React from "react";
// const Greet= props =>{
//     console.log(props);
//     return <div>
//         <h2>hi {props.name} a.k.a {props.heroName}</h2>
//         {props.children}
//         </div>;
// }
//destructing props 1
// const Greet= ({name,heroName}) =>{
    
//     return <div>
//         <h2>hi {name} a.k.a {heroName}</h2>
//         {/* {props.children} */}
//         </div>;
// }
//destructing props 1

const Greet= props =>{
    const {name,heroName}=props;
    return <div>
        <h2>hi {name} a.k.a {heroName}</h2>
        {/* {props.children} */}
        </div>;
}
export default Greet;