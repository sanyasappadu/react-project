import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import OrderSummary from './OrderSummary'
class App1 extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='order-summary' element={<OrderSummary/>}/>
                </Routes>
            </>
        )
    }
}

export default App1