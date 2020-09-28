import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navBar';

class App extends Component{
  state = { 
    counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},

    ]
 }
 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter)
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});

 }
 handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter)
  counters[index] = {...counter};
  counters[index].value--;
  if(counters[index].value >= 0){
    this.setState({counters});
  }

}
 handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({counters})
    // console.log(counterId + "----- ")
 }
 handleReset = () => {
    const counters = this.state.counters.map(c=>{
        c.value = 0;
        return c;
     })
     this.setState({counters});
 }
render(){
  return (
    <React.Fragment>
      <NavBar totalCounter={this.state.counters.filter(c=> c.value>0).length} />
      <main className = "container">
        <Counters 
        counters={this.state.counters} 
        onReset={this.handleReset} 
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete} />
      </main>
    </React.Fragment>
  );
}
}

export default App;
