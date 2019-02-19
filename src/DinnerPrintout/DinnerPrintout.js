import React, { Component } from 'react';
import './DinnerPrintout.css';
import { Link } from 'react-router-dom';


//import Select from 'react-select';

class DinnerPrintout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [
            "dish 1 image here",
            "dish 2 image here",
            "dish 3 image here"
          ]
    }

  }
  
  render() {
    return (
      <div className="DinnerPrintout">
      {/*<h3>Dinner Printout</h3>*/}
        <h4>My Dinner: # people</h4>

        <Link to="/search">
            <button>Go back and edit dinner</button>
        </Link>

        <hr ></hr>
        <h4> Dish 1 image here </h4>
        <h4> Dish 1 title</h4>
        <p> Description of the dish bla bla bla bla bla </p>
        <h4> Dish 1 preparation</h4>
        <p> How to prepare this dish add salt and sugar and shake. Then bake and serve cold. Bon Apetite!</p>
        <hr ></hr>
        <h4> Dish 2 image here </h4>
        <h4> Dish 2 title</h4>
        <p> Description of the dish bla bla bla bla bla </p>
        <h4> Dish 2 preparation</h4>
        <p> How to prepare this dish add salt and sugar and shake. Then bake and serve cold. Bon Apetite!</p>
        <hr ></hr>

                  
      </div>
    );
  }
}

export default DinnerPrintout;
