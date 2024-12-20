import React, { Component } from "react";
import Project from './project';
import axios from 'axios';


class UseDashboard extends Component {
  state = {
    isLoading: true,
    Projects: []
  }

  componentDidMount() {
    this.loadingAPI();
  }

  loadingAPI = () => {
    this.setState({isLoading: true});
    axios.post('/', {
      ProjectNamePattern: '(E_\\w*_\\w*|AlaskaAirCom|CustomerMobile|LCC)',
      FileNamePattern: 'package.json',
      ContentPattern: '@alaskaairux.*: .*'
      },{
        baseURL: 'https://ado.w2.ecomm-prod-aks.alaskaair.com/',
        timeout: 30000,
        headers: {
          'Content-Type': 'application/json',
          'Org': 'itsals',
          'PAT': import.meta.env.VITE_APP_ADO_PAT
        }
      })
      .then(res => {
          const projects = res.data;
          this.setState(projects);
          this.setState({isLoading: false});
      })
      .catch(function(error){
          console.log(error);
      });
  }

  render() {
    return (
      <section id="releases-by-sprint">
        <h1 className="auro_heading auro_heading--display">Auro use dashboard</h1>
        <p>The following summary data is a list of all the projects in ADO that are currently using Orion/Auro Design System resources. Be sure to review the <auro-hyperlink href="https://auro.alaskaair.com/component-status" target="_blank">current component status</auro-hyperlink> for applicable updates.</p>
        {this.state.isLoading ? <p className="isLoading">Loading...</p> : this.state.Projects.map(({Name, Repositories}, index) => (
          <Project key={index + '_' + Name} name={Name} repos={Repositories} />
        ))}
      </section>
    );
  }
}

export default UseDashboard;
