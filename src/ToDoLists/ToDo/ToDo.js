import React from 'react';
import './ToDo.scss';


const ToDo = props =>{
    return(
        <div className='toDo'>
             <p>title: {props.title}</p>
             <p>content:{props.content}</p>
             <p>time: {props.time}</p>
             <p>date: {props.date}</p>
        </div>
    );
}

export default ToDo;