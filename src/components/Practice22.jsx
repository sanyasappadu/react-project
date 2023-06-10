
// import { useState } from 'react';

// function Practice22() {
//   const [inputValue, setInputValue] = useState('');
//   const [answer, setAnswer] = useState(0);

//   function handleInputChange(event) {
//     setInputValue(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault(); // prevent default form submission behavior
//     // console.log('Form submitted with value:', inputValue);
//     // do something with the form data here
    
//     let output = inputValue;

//     if(Number.isInteger(parseInt(output))) {
//       setAnswer(Number(output));
//       return;
//     }
//     setAnswer(-1);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//       </label>
//       <button type="submit">Submit</button>
//       <h3>{answer}</h3>
//     </form>
//   );
// }
// export default Practice22


import React from 'react'
import User from './User';

const Practice22=()=> {

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 },
];

const userList = users.map(user => <User key={user.name} name={user.name} age={user.age} />);

return (
  <div>
    {userList}
  </div>
);
}
export default Practice22