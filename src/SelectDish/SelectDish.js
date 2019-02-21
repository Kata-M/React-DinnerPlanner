import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import 'bootstrap/dist/css/bootstrap.css' ;
import{Container, Row, Col} from 'reactstrap';


const scaryAnimals = [
  { label: "Alligators", value: 1 },
  { label: "Crocodiles", value: 2 },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 },
];

class SelectDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }
  

  render() {
    return (
      // <div className="SelectDish">
       <Container >
            <Row>
              {/* We pass the model as property to the Sidebar component */}
              <Sidebar model={this.props.model}/>
              <Col xs={12} md={8} large={8}>
    
                <Row className="findDish">
                  <h4 className="headline4">FIND A DISH</h4>

                  </Row>
                  <Row className="SearchBar">
                  <div className="content">
                    {/* <div className="container"> */}
                      <section className="section">
                        <form className="form" id="addItemForm">
                          <input
                            type="text"
                            className="input"
                            id="addInput"
                            placeholder="Enter key words"
                          />
                          <select className="dropDownSearch" id = "selectType">
                            <option value="all">All</option>
                            <option value="maindish">Main Dish</option>
                            <option selected value="starter">Starter</option>
                            <option value="dessert">Dessert</option>
                          </select>

                          <button className="buttonis-info" onClick={this.addItem}>
                            Search
                          </button>
                        </form>
                      </section>
                    
                    {/* </div> */}
                  </div>
                  </Row>
                 
                  <Row className = "Dishes">
                    <Dishes/>
                  </Row>

              </Col>
            </Row>
          </Container>
      // </div>
    );
  }
}

export default SelectDish;
