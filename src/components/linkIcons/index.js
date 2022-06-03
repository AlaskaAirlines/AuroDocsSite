import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Npm from '-!svg-react-loader!../../assets/npmInstall.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Issue from '-!svg-react-loader!../../assets/issue.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import GetCode from '-!svg-react-loader!../../assets/getCode.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import Docs from '-!svg-react-loader!../../assets/docsSite.svg';
import './style.scss';

function LinkIcons(props) {

  function docsSite() {
    if (props.docs) {
      return (
        <a href={props.docs} target="_blank" rel="noopener noreferrer" aria-label="See the Docs site">
          <Docs role="img" aria-hidden="false" />
        </a>
      )
    }
  }

  function npm() {
    if (props.npm) {
      return (
        <a href={props.npm} target="_blank" rel="noopener noreferrer" aria-label="Install npm pachage">
          <Npm role="img" aria-hidden="false" />
        </a>
      )
    }
  }

  return (
    <div className="imgIcon">
      <a href={props.github} target="_blank" rel="noopener noreferrer" aria-label="Go to Github Site">
        <Issue role="img" aria-hidden="false" />
      </a>
      {npm()}
      <a href={props.code} target="_blank" rel="noopener noreferrer" aria-label="See the code on Github">
        <GetCode role="img" aria-hidden="false" />
      </a>
      {docsSite()}
    </div>
  );
}

export default LinkIcons;
