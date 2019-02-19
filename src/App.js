import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
import SelectDish from "./SelectDish/SelectDish";
import DinnerOverview from './DinnerOverview/DinnerOverview';
import DinnerPrintout from './DinnerPrintout/DinnerPrintout';
import DishDetails from './DishDetails/DishDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
          
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome}/>
          <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/> 
          <Route path="/DinnerOverview" render={() => <DinnerOverview model={modelInstance}/>}/> 
          <Route path="/DinnerPrintout" render={() => <DinnerPrintout model={modelInstance}/>}/> 
          <Route path="/DishDetails" render={() => <DishDetails model={modelInstance}/>}/> 
        
        </header>
      </div>
    );
  }
}

export default App;
