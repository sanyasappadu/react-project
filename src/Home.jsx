import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    return (
        <div><p>home page</p>
            <br></br>
            <button onClick={() => navigate('order-summary')}>Order place</button>
        </div>

    )
}

export default Home