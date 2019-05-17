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
  componentWillMount(){
    const searchObj = {
      author: this.props.userName
    };
    // console.log(this.props.userName)

    API.getSnippets(searchObj).then(response => {
      this.setState({
        BitsData: response.data
      })
    })


  }
  render() {
    return (
      <div>
      {this.state.BitsData.map((bitData, index) => (
          <card className="bitcard" key={index.toString()}>
            <h2>{bitData.title}</h2>
            <p>{bitData.description}
            </p>
            <Button variant="primary">Go somewhere</Button>
          </card>
      ))}
      </div>
    );
  }
}

export default BitsCard;
