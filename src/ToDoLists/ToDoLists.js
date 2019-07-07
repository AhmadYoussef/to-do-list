import React from 'react';
import ToDo from './ToDo/ToDo';
import './ToDoLists.scss';


const ToDoLists = props =>{
    return(
        <div className='toDoLists'>
            {props.doingList.map(items=> <ToDo key={items.id} {...items} />)}
        </div>
    );
}

export default ToDoLists;