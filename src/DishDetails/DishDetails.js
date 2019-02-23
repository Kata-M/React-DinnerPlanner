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

class DishHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header" />
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
        dish: dish,
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR',
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
        dishDetails = 
     
          <div id="dish.id"  key={this.state.dish.id} >
            <h2>{this.state.dish.title} </h2>
            {console.log('dish details looping',this.state.dish, this.props)}
           
            <DishHeader image={this.state.dish.image} />
            {/* <DishBody title={this.state.dish.title} /> */}
            <p> {this.state.dish.instructions}</p>
            <Link to="/search">
              <button>Back To Search</button>
            </Link>
            <h4> Preparation </h4>
            <p> {this.state.dish.instructions}</p>

          </div>

        break;
      default:
        dishDetails = 

        <div id="dish.id"  key={this.state.dish.id} >
              <b>Failed to load data, please try again</b>
              <Link to="/search">
                 <button>Back To Search</button>
              </Link>
        </div>
        break;
    }

    return (

      <Container>
        <Row>
        <Sidebar model={this.props.model} />
        <Col xs={12} md={8} large={8}>
          <div className="DishDetails">
            <hr></hr>
              {dishDetails}
            <button>Add To Menu</button>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DishDetails;
