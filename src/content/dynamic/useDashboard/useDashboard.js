import React, { Component } from "react";
import getAuroUseData from 'functions/useDataService';
import Project from './project';


class UseDashboard extends Component {
  render() {
    const content = getAuroUseData();
    return (
      <section id="releases-by-sprint">
        <h1 className="auro_heading auro_heading--display">Auro use dashboard</h1>
        <p>The following summary data is a list of all the projects in ADO that are currently using Orion/Auro Design System resources. </p>
        {content.Projects.map(({Name, Repositories}) => (
          <Project key={Name} name={Name} repos={Repositories} />
        ))}
      </section>
    );
  }
}

export default UseDashboard;
