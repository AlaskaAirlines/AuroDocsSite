import React, { Component } from "react";
import {generateFileTableData,getTableHeaders} from "~/functions/useDataService";

class Repository extends Component {
  render() {
    return (
      <div key={this.props.name} className="repositoryWrapper">
        <h1 className="auro_heading auro_heading--600">{this.props.name}</h1>
        {this.props.files.map(({Name, Lines}, index) => (
          <auro-table
            key={index + '_' + Name}
            nowrap
            columnHeaders={JSON.stringify(getTableHeaders())}
            componentData={JSON.stringify(generateFileTableData(Name, Lines))}>
          </auro-table>
        ))}
      </div>
    )
  }
}

export default Repository;
