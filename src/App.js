import React, { Component } from 'react'
import MyComponent from './MyComponent';

export default class App extends Component{
    render(){
        return(
           <div>
            <h1> Hello this is react jsx main component.</h1>
            <MyComponent name="Alexander"/>
            </div>
        )
    }
}