import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css' ;
import{Container, Row, Col} from 'reactstrap';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      list: [
        {name: "dish 1"},
        {name: "dish 2"},
        {name: "dish 3"},
      ],
      size: 3
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }
  

  render() {
    /*let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }*/
    const rows = this.state.list.map((dish) =>
      <tr>
        {Object.keys(dish).map(function(attr) {
          return (
            <td>{dish[attr]}</td>
          )
        })}
      </tr>
    )
    console.log(rows);
    
    return (
  
              <Col className="Sidebar" xs={12} md={4}>
                <p>
                People: <input value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged}/>
                <br/>
                Total number of guests: {this.state.numberOfGuests}
                </p>

                <p>Dish name</p>
                <p>Cost</p>
                <section className="section">
                      <ul>
                           {this.state.list.map(item => (
                          <li key={item.name}>{item.name}</li>
                        ))}
                      </ul>
                </section>

                <div className="container">
                <div className="row">
                  <div className="col s12 board">
                    <table id="simple-board">
                              <tbody>
                        {rows}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          
                <p>Total Cost: ## SEK</p>

                <Link to="/DinnerOverview">
                    <button>Confirm Dinner</button>
                </Link>

              
              </Col>
    
    );
  }
}

export default Sidebar;

{/*
var TableComponent = React.createClass({
  render: function() {
    // Data
    var dataColumns = this.props.data.columns;
    var dataRows = this.props.data.rows;

    var tableHeaders = (<thead>
          <tr>
            {dataColumns.map(function(column) {
              return <th>{column}</th>; })}
          </tr>
      </thead>);

    var tableBody = dataRows.map(function(row) {
      return (
        <tr>
          {dataColumns.map(function(column) {
            return <td>{row[column]}</td>; })}
        </tr>); });
     
    // Decorate with Bootstrap CSS
    return (<table className="table table-bordered table-hover" width="100%">
        {tableHeaders}
        {tableBody}
      </table>) }});
        

// Example Data
var tableData = {
  columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
  rows: [{
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'Veterinary Assitance',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'foo',
    'Unit': null,
    'Cost/Unit': undefined,
    'Units Requested': 42
  }]
};


  <TableComponent data = {tableData} />,
  document.getElementById('table-component');
*/}