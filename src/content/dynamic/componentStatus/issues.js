import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

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

    dialog.removeAttribute("open");
    dialog.setAttribute("open", true);
  }

  toggleDialogClose = (elName) => {
    let dialog = document.querySelector(elName);

    dialog.removeAttribute("open");
  }

  render() {
    return (
      <table key={this.props.name} className="auro_table epicIssues">
        <thead>
          <tr>
            <th className="auro_table--spread"><auro-header level="2" display="600">{this.props.name}</auro-header></th>
            <th className="auro_table--spread">Latest Comments</th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(({title, body, url, labels, number, createdAt, assignees, comments}) => (
            <tr key={title}>
              <td className="auro_table--issue">
                <div>
                  <button className="imgIcon" onClick={() => this.toggleDialog(`#dialog-${number}`)} aria-label="Go to Github Site">
                    {title} (<small>#{number}</small>)
                  </button>
                  <auro-drawer id={`dialog-${number}`} md>
                    <span slot="header">{title}</span>
                    <span slot="content">
                      <div className="auro-markdown util_wrap">
                        <ReactMarkdown source={body} />
                    </div>
                    </span>
                    <span slot="footer">
                      <auro-hyperlink cta secondary href={url} target="_blank">See: {title}</auro-hyperlink>
                    </span>
                  </auro-drawer>
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
                    : 'unassigned'
                  ))}
                </div>
              </td>
              <td className="auro_table--notes">
                {comments.nodes.map(({body, createdAt}) => (
                  <div className="auro-markdown" key={createdAt}>
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
