import React, { Component } from "react";
import API from "../../utils/API";
import {Button} from 'react-bootstrap';
import './BitsCard.css';



class BitsCard extends Component {
  constructor() {
    super();
    this.state = {
      BitsData: []
    };
  }
  componentDidMount(){
    API.getSnippets().then(response => {
      this.setState({
        BitsData: response.data
      })
    })


  }
  render() {
    return (
      <null>
      {this.state.BitsData.map((bitData, index) => (
        <null>
          <card className="bitcard" key={index.toString()}>
            <h2>{bitData.title}</h2>
            <p>{bitData.description}
            </p>
            <Button variant="primary">Go somewhere</Button>
          </card>
      </null>
      ))}
      </null>
    );
  }
}

export default BitsCard;
