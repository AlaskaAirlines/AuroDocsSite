import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class Issue extends Component {

  render() {
    return (
      <div key={this.props.name}>
        <h2 className="auro_heading auro_heading--800">{this.props.tableName}</h2>
        <table className="auro_table auro_table--audit">
          <thead>
            <tr>
              <th className="auro_util_nowrap">ComponentXXX</th>
              <th>Artwork</th>
              <th>UI Kit</th>
              <th>Code</th>
              <th>Docs</th>
              <th>Notes</th>
            </tr>
          </thead>
          {this.props.issues.map(({title, url, labels, comments}) => (
            <tr>
              <td className="auro_util_nowrap">
                <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}) => (
                    name.includes("Artwork")
                      ? <div ke2y={name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}) => (
                    name.includes("UI Kit")
                      ? <div key={name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}) => (
                    name.includes("Code")
                      ? <div key={name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}) => (
                    name.includes("Docs")
                      ? <div key={name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                {comments.nodes.map(({body, createdAt}) => (
                  <div className="auro-markdown">
                    <ReactMarkdown source={body} />
                    {createdAt}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

export default Issue;
