import React, { Component } from "react";
import API from "../../utils/API";
import {Button} from 'react-bootstrap';
import './BitsCard.css';


class BitsCard extends Component {
  goTo(route) {
    this.props.history.push(`/${route}`)
  }
  constructor() {
    super();
    this.state = {
      BitsData: []
    };
  }
  getBits = () =>{
    const searchObj = {
      author: this.props.userName
    };
    API.getSnippets(searchObj).then(response => {
      this.setState({
        BitsData: response.data
      })
    }) 
  } 
  componentDidMount(){
    this.getBits()
  }
  componentDidUpdate(){
    this.getBits()
  }
  handleClick = bitId => {
    const {bitIdHandle} = this.props;
    this.setState({ bitDataID: bitId })
    bitIdHandle(bitId)
    this.goTo('some-bits-Please')
    
  }
  render() {
    return (
      <div>
      {this.state.BitsData.map((bitData, index) => (
          <card className="bitcard" key={index.toString()}>
            <h2>{bitData.title}</h2>
            <p>{bitData.description}</p>
            <Button onClick={() => this.handleClick(bitData._id)}>View/Edit</Button>
          </card>
      ))}
      </div>
    );
  }
}

export default BitsCard;
