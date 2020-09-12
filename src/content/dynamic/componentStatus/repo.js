import React, { Component } from "react";

let randomNumber = ''

class Repo extends Component {

  humanDate(dateData) {
    const standardOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC"
    };

    const then = new Date(dateData);

    return then.toLocaleString('en-us', standardOptions);
  }

  charGenerate() {
    const chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    randomNumber = [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``
  }

  render() {
    return (
      <tr>
        <td className="auro_util_nowrap">
          <auro-hyperlink href={this.props.homepageUrl}>{this.props.name}</auro-hyperlink>
        </td>
        <td className="auro_util_nowrap">
          { this.charGenerate() }
          {
            this.props.releases.nodes.length !== 0
              ? this.props.releases.nodes.map(({tagName, createdAt, id}) => (
                  <div>
                    <a key={id} id={randomNumber} href={this.props.url} target="_blank" className="noLinkUi" rel="noopener noreferrer">
                      <div className="badge">
                        <div className="title">Release</div>
                        <div className="data data--release">{tagName}</div>
                      </div>
                    </a>
                    <auro-popover for={randomNumber}>
                      { this.humanDate(createdAt) }
                    </auro-popover>
                  </div>
                ))
              : <div className="badge">
                  <div className="title">Release</div>
                  <div className="data data--null">v0</div>
                </div>
          }
        </td>
        <td className="auro_util_nowrap">
          {
            this.props.issues.totalCount > 0
              ? <a href={`https://github.com/AlaskaAirlines/${this.props.name}/issues`} target="_blank" className="noLinkUi" rel="noopener noreferrer">
                  <div className="badge">
                    <div className="title">Open Issues</div>
                    <div className="data data--issues">{this.props.issues.totalCount}</div>
                  </div>
                </a>
              : <div className="badge">
                  <div className="title">Open Issues</div>
                  <div className="data data--null">{this.props.issues.totalCount}</div>
                </div>
          }
        </td>
        <td className="short">{this.props.description}</td>
      </tr>
    )
  }
}

export default Repo;
