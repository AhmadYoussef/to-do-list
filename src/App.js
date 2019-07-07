import React from 'react';
import ToDoLists from './ToDoLists/ToDoLists';
import AddList from './AddList/AddList';
import './App.scss';

class App extends React.Component {
  state ={
    doList : [],
    newId: 1,
    isFormShow : true
  }
  componentDidMount(){
    if(localStorage.state)
    this.setState({doList : JSON.parse(localStorage.getItem('state'))}, ()=>{
      this.setState({newId : this.state.doList[this.state.doList.length-1].id+1, isFormShow:false})
    })
  }
  updateToDoState = (newItem) =>{
    newItem.id = this.state.newId;
    this.setState({
      doList : [...this.state.doList, newItem], 
      newId : this.state.newId+1}, ()=>{localStorage.setItem('state',JSON.stringify(this.state.doList))})
  }
  showForm = ()=>{
    this.setState({isFormShow : !this.state.isFormShow})
  }

  render(){
    return (
      <div className="App">
        <h2>Task list</h2>
        <button onClick={this.showForm} className="addBtn">{this.state.isFormShow ?  <span>x</span> : <span>+</span>}</button>
        {this.state.isFormShow ? <AddList showForm={this.showForm} updateToDoState={this.updateToDoState} />: null}
        <ToDoLists doingList={this.state.doList}  />
      </div>
    );
  }
}
export default App;
