import React from 'react';

const Person = (props)=>{
return (
    <div>
        <h1>{props.name}</h1>
        <p>age : {props.age} ans</p>
    </div>)
}

export default Person;