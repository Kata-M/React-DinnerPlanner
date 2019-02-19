import React, { Component } from 'react';
import './DishDetails.css';
import { Link } from 'react-router-dom';


//import Select from 'react-select';

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [
            "ingredient 1",
            "ingredient 2",
            "ingredient 3"
          ]
    }

  }
  
  render() {
    return (
      <div className="DishDetails">
      {/*<h3>Dish Details</h3>*/}

        <hr ></hr>
        <h4> Dish 1 title</h4>
        <h4> Dish 1 image here </h4>
        <p> Description of the dish bla bla bla bla bla </p>
       
        <Link to="/search">
            <button>Back To Search</button>
        </Link>

        <h4> Dish 1 preparation</h4>
        <p> How to prepare this dish add salt and sugar and shake. Then bake and serve cold. Bon Apetite!</p>
   
        <section className="section">
              <ul>
                {this.state.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
        </section>
        <button>Add To Menu</button>
                  
      </div>
    );
  }
}

export default DishDetails;
