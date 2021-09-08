import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from "../components/navbar/Navbar";
import Home from '../pages/home/Home';
import About from '../pages/about/About';


const AppRouter = () => {
    return (
        <BrowserRouter>
        <Navbar />
       <Switch>

<Route path="/" exact component={Home}/>
<Route path="/about" exact component={About}/>
       </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
