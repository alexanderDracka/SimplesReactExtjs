import React from 'react';
import { Panel, Grid, Container } from '@extjs/reactor/modern';
/*
Ext.require([
    'Ext.grid.Grid'
]);*/

//import Basta from '../data/basta_input';

export default class GridComponent extends React.Component {
    constructor(props) {
        super(props);
        /*this.store = Ext.create('Ext.data.JsonStore', {
            storeId: 'bastaJson',
            autoLoad: true,
            fields: ['id', 'name', 'email'],
            data: [
                {
                    "id": 1,
                    "name": "Ed Spencer",
                    "email": "ed@sencha.com"
                },
                {
                    "id": 2,
                    "name": "Abe Elias",
                    "email": "abe@sencha.com"
                }
            ]
            // Basta,
            proxy:{
                type:'ajax',
                url:'basta_input.json',
                reader:{
                    type:'json',
                    root:'blah'
                }

        }
        })*/
    }

    render() {
        return (
           <Container >
               <Panel title="Mypanel">
                    <Grid title="MyGrid"/>
               </Panel>
          </Container>
        )
    }
}