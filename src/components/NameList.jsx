import React from 'react'
// import Person from './Person'
// function NameList() {
//     const names = ['sunny', 'bunny', 'mani']
//     return (
//         <div>
//             {
//                 names.map(name => <h2>{name}</h2>)
//             }

//         </div>
//     )
// }
function NameList() {
    const names = ['sunny', 'bunny', 'mani']
    const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    return (<div>{nameList}</div>)
} 
// function NameList() {
//     const persons = [ 
//         {
//             id:1,
//             name:'sunny',
//             skill:'react'
//         },
//         {
//             id:2,
//             name:'bunny',
//             skill:'node'
//         }
//     ]
//     const nameList = persons.map(person => ( <Person key={person.id} person={person}/> ) )
//     return (<div>{nameList}</div>)
// }



export default NameList