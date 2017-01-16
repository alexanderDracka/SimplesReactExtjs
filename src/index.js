import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // app components
import { install } from '@extjs/reactor';
import MyComponent from'./MyComponent';

install({
    // We set viewport: true because we are using an Ext JS component to manage layouts at the root of our app.
    // Setting viewport: true adds css rules to make the html, body, and the root react element height: 100% to
    // allow the root component to expand to fill the full screen. You should omit this option when using
    // other stylesheets or component libraries to control the layout.
    viewport: true
});

// launch the react app once Ext JS is ready
Ext.onReady(() => ReactDOM.render(<MyComponent/>, document.getElementById('root')));
