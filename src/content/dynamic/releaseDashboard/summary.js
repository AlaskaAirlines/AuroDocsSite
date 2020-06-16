import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class Summary extends Component {
  createNewDate(date) {
    let endDate = new Date(date);
    return `${endDate.getUTCMonth() + 1}/${endDate.getUTCDate()}/${endDate.getUTCFullYear()}`;
  }

  render() {
    return (
      <div key={this.props.name} className="">
        {this.props.milestones.nodes.map(({title, description, dueOn, state}) => (
          <div key={title}>
            <h1 className="auro_heading auro_heading--800">{title}</h1>
            <p><b>Sprint end:</b> {this.createNewDate(dueOn)} | <b>Relesae status:</b> {state.toLowerCase()}</p>
            <ReactMarkdown source={description} />
          </div>
        ))}
      </div>
    )
  }
}

export default Summary;
