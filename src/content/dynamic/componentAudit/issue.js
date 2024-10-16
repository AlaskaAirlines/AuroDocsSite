import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";

class Issue extends Component {

  render() {
    return (
      <div key={this.props.name}>
        <h2 className="auro_heading auro_heading--800">{this.props.tableName}</h2>
        <table className="auro_table auro_table--audit">
          <thead>
            <tr>
              <th className="auro_util_nowrap">Component</th>
              <th>Artwork</th>
              <th>Code</th>
              <th>Docs</th>
              <th>UI Kit</th>
              <th className="auro_table--notesXXX">Notes</th>
            </tr>
          </thead>
          <tbody>
          {this.props.issues.map(({title, url, labels, comments}) => (
            <tr>
              <td className="auro_util_nowrap">
                <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}, index) => (
                    name.includes("Artwork")
                      ? <div key={index + '_' + name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}, index) => (
                    name.includes("Code")
                      ? <div key={index + '_' + name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}, index) => (
                    name.includes("Docs")
                      ? <div key={index + '_' + name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                <div className="labelWrapper">
                  {labels.nodes.map(({name, color}, index) => (
                    name.includes("UI Kit")
                      ? <div key={index + '_' + name} data-name={name} title={name} className="issueLabel auditLabel"
                          style={{backgroundColor: '#' + color, color: '#' + color}}>
                        </div>
                    : ''
                  ))}
                </div>
              </td>
              <td>
                {comments.nodes.map(({body, createdAt}) => (
                  <div className="auro-markdown">
                    <ReactMarkdown children={body} />
                    <small>
                      <auro-datetime utc={createdAt} weekday="long"></auro-datetime>
                    </small>
                  </div>
                ))}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Issue;
