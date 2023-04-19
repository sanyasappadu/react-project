import React,{useState} from 'react'

function HookCounterThree() {
    const [name,setname]=useState({firstName:"",lastName:""})
  return (
    <div>
        <input type="text" value={name.firstName} 
        onChange={e=>setname({...name, firstName: e.target.value })}/>
        <input type="text" value={name.lastName}
        onChange={e=>setname({...name, lastName: e.target.value })} />
        <h1>Your first Name is - {name.firstName}</h1>
        <h1>Your last Name is - {name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterThree