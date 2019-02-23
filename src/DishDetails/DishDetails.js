import React, { Component } from 'react';
import './DishDetails.css';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import { Container, Row, Col } from 'reactstrap';
import { modelInstance } from '../data/DinnerModel';
import { Route } from 'react-router-dom';


//import Select from 'react-select';

class DishBody extends React.Component {
  render() {
    return (
      <div className="card-body">

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

      </div>
    )
  }
}

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {

      dishCard: this.props.match.params.id,
      list: [
        "ingredient 1",
        "ingredient 2",
        "ingredient 3"
      ],
      dish : null,
      status: 'INITIAL'
    }

  }

  componentDidMount = () => {
    //const {handle} = this.props.match.params
    //const {dish} = this.props.location.state
  
    modelInstance.getDish(this.state.dishCard).then(dish => {
      {console.log('get dish :) '+dish)}
      this.setState({
        status: 'LOADED',
        dish: dish
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })

    //let dishCard = this.props.match.params.id
  }

  render() {
    console.log('Inside dish details', this.state);
    let dishDetails = null;
    switch (this.state.status) {
      case 'INITIAL':
      dishDetails = <em>Loading...</em>
        break;
      case 'LOADED':
      // dishDetails = this.state.dish.map((dish) =>
      //     <div onClick={this.SaveCardToModel(dish) } id="dish.id"  key={dish.id} className="card">
      //       {console.log('looping',dish, this.props)}
      //       <Link to={{pathname: '/DishDetails/'+dish.id }}>
             
      //          <DishBody title={dish.title} />
      //       </Link>
      //     </div>
       // )
        break;
      default:
      dishDetails = <b>Failed to load data, please try again</b>
        break;
    }

    return (

      <Container>
        <Row>
          {console.log("Before sidebar insert with export model : "+this.props.model)}
        <Sidebar model={this.props.model} />
        <Col xs={12} md={8} large={8}>
          <div className="DishDetails">
            <hr></hr>
            {console.log("hello "+ this.state.dishCard)}
            {console.log("TESTS : "+ this.props.model.getDish(this.state.dishCard))}
             {/* <h4> Dish 1 title : {this.state.dish.title}</h4>
            <h4> Dish 1 image here : {this.state.dish.id}</h4> */}
             <p> Description of the dish bla bla bla bla bla </p>

            <Link to="/search">
              <button>Back To Search</button>
            </Link>

            <h4> Dish 1 preparation ID is {this.state.dishCard}</h4>
            <p> How to prepare this dish add salt and sugar and shake. Then bake and serve cold. Bon Apetite!</p>
            <Row>
               {dishDetails}
             </Row>

            <section className="section">
              <ul>
                {this.state.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <button>Add To Menu</button>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DishDetails;
