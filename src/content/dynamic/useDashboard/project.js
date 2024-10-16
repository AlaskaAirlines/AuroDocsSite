import React, { Component } from "react";
import Repository from './repository';

class Project extends Component {
  render() {
    return (
      <div key={this.props.name} className="projectWrapper">
        <h1 className="auro_heading auro_heading--800">{this.props.name}</h1>
        {this.props.repos.map(({Name, Files}) => (
          <Repository key={index + '_' + name} name={Name} files={Files} />
        ))}
      </div>
    )
  }
}

export default Project;
