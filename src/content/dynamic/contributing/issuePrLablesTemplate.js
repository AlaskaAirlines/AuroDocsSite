import React, { Component } from "react";

class AuroContributingIssuesTemplate extends Component {

  getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#fff';
  };

  render() {

    return (
      <tr>
        <td>
          <auro-badge label style={{
            backgroundColor: `#${this.props.color}`,
            borderColor: `#${this.props.color}`,
            padding: "5px 10px",
            marginRight: "auto",
            color: this.getContrastYIQ(this.props.color)}}
            >{this.props.name}</auro-badge>
        </td>
        <td style={{verticalAlign: "baseline"}} className="auro_util_fontWeightMedium">{this.props.description}</td>
        <td style={{verticalAlign: "baseline"}} className="auro_util_fontWeightMedium">{this.props.process}</td>
      </tr>
    );
  }
}

export default AuroContributingIssuesTemplate;
