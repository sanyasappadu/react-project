import React from 'react'
// import './myStyle.css'
// function Stylesheet(props) {
//     const className=props.primary ? 'primary' : ""
//   return (
//     <div>
//     <h1 className={`${className} font-xl`}>style</h1>
//     </div>
//   )
// }
// inline styling
const heading={
    fontSize:'70px',
    color:'blue'
}
function Stylesheet(){
    return (
        <div>
            <h1 style={heading}>sunny</h1>
        </div>
    )
}
export default Stylesheet