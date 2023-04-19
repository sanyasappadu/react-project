import React, { createElement }  from "react";
const Hello = () => {
    // return(
    // <div className='dummyClass'>
    //     <h1>Hello Sunny</h1>
    // </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'hello sunny'));
}
export default Hello;