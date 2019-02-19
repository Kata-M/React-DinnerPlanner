import React, { Component } from 'react';
import './DinnerOverview.css';
import { Link } from 'react-router-dom';


//import Select from 'react-select';

class DinnerOverview extends Component {
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
      <div className="DinnerOverview">
      <h1>Dinner Overview</h1>
        <h4>My Dinner: # people</h4>

        <Link to="/search">
            <button>Go back and edit dinner</button>
        </Link>

        <hr ></hr>
        <section className="section">
              <ul>
                {this.state.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
        </section>
        <hr ></hr>
        <p>Total Price: ## SEK</p>
        <Link to="/DinnerPrintout">
            <button>Print Full Recipe</button>
        </Link>

                  
      </div>
    );
  }
}

export default DinnerOverview;
