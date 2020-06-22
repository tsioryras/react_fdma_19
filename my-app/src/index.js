import React from 'react';
import ReactDom from 'react-dom';
import Person from './components/Person/Person'

const Persons = (props)=>{
    const list = props.list;
    return (
        <div>
           {list}
        </div>);
}  

const users = [ 
    <Person name="Jack Dorsey" age="42"/>,
    <Person name="Mark z" age="35"/>
    ];
    
ReactDom.render(<Persons list={users}/>,document.getElementById('root'));