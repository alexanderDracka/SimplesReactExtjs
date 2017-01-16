import React, { Component } from 'react';
import { Panel } from '@extjs/reactor/modern';

export default class MyComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {        
        return (
            <Panel title={this.props.name}/>
        )
    }
}