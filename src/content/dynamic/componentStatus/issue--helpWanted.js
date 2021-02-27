import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Readme from '-!svg-react-loader!../../../assets/readme.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Github from '-!svg-react-loader!../../../assets/github.svg';

class HelpWanted extends Component {
  getContrastYIQ(hexcolor) {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#000' : '#fff';
  };

  toggleDialog = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = 'hidden';
    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDialogClose = (elName) => {
    let dialog = document.querySelector(elName);
    const html = document.querySelector('html');

    html.style.overflow = '';
    dialog.removeAttribute("open");
  }

  render() {
    return (
      <table key={this.props.name} className="auro_table epicIssues">
        <thead>
          <tr>
            <th className="auro_table--spread">Issues for: {this.props.name}</th>
            <th className="auro_table--spread"></th>
            <th className="auro_table--spread">Latest Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, body, url, labels, number, createdAt, assignees, comments}) => (
            <tr key={title}>
              <td className="auro_table--issue">
                <div>
                  <auro-hyperlink href={url} target="_blank">{title}</auro-hyperlink>(<small>#{number}</small>)
                </div>
                <div className="labelWrapper util_stackPaddingMd--top">
                  {labels.nodes.map(({name, color, description}) => (
                    <div key={name} title={description} className="issueLabel" style={{backgroundColor: '#' + color, color: this.getContrastYIQ(color)}}>
                      {name}
                    </div>
                  ))}
                </div>
                <div className="githubAvatar--wrapper">
                  <small>Created at: <auro-datetime utc={createdAt} type="numeric"></auro-datetime></small><br/>
                  <small>Assigned: </small>{assignees.nodes.map(({avatarUrl, name, id}) => (
                    assignees.nodes.length > 0
                    ? <img key={id} src={avatarUrl} className="githubAvatar" alt={name} title={name} />
                    : ''
                  ))}
                </div>
              </td>
              <td className="auro_table--labels">
                <button className="imgIcon" onClick={() => this.toggleDialog(`#dialog-${number}`)} aria-label="Go to Github Site">
                  <Readme role="img" aria-hidden="false" />
                </button>
                <div className="imgIcon">
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Go to Github Site">
                    <Github role="img" aria-hidden="false" />
                  </a>
                </div>

                <auro-dialog id={`dialog-${number}`} md>
                  <span slot="header">{title}</span>
                  <span slot="content">
                    <div className="auro-markdown util_wrap">
                      <ReactMarkdown source={body} />
                  </div>
                  </span>
                  <span slot="footer">
                    <auro-hyperlink cta secondary href={url} target="_blank">See: {title}</auro-hyperlink>
                  </span>
                </auro-dialog>
              </td>
              <td className="auro_table--notes">
                {comments.nodes.map(({body, createdAt}) => (
                  <div className="auro-markdown">
                    <ReactMarkdown source={body} />

                    {comments.nodes.map(({author}) => (
                      <img key={createdAt} src={author.avatarUrl} className="githubAvatar" alt="avatar" title={author.login} />
                    ))}<small>
                      <auro-datetime utc={createdAt} weekday="long"></auro-datetime>
                    </small>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default HelpWanted;
