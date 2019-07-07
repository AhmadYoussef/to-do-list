import React from 'react';
import './AddList.scss';


class AddList extends React.Component{
    titleRef= React.createRef();
    contentRef= React.createRef();
    timeRef= React.createRef();
    dateRef= React.createRef();

    addNewDo = e =>{
        e.preventDefault();
        const newItem ={
            title: this.titleRef.current.value,
            content: this.contentRef.current.value,
            time: this.timeRef.current.value,
            date: this.dateRef.current.value
        }
        console.log(newItem);
        this.props.updateToDoState(newItem);
        e.target.reset();
        this.props.showForm();
    }
    render(){
        return(
            <form className="addForm" onSubmit={this.addNewDo}>
                <input type="text" placeholder='Enter Title' ref={this.titleRef} />
                <input type="text" placeholder='Enter Content' ref={this.contentRef} />
                <input type="text" placeholder='Enter Time' ref={this.timeRef} />
                <input type="text" placeholder='Enter Date' ref={this.dateRef} />
                <input type="submit" value="Add New Item" />
            </form>
        );
    }
}

export default AddList;