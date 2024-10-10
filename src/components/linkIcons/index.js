import React from 'react';
import Npm from '~/assets/npmInstall.svg?react';
import Issue from '~/assets/issue.svg?react';
import GetCode from '~/assets/getCode.svg?react';
import Docs from '~/assets/docsSite.svg?react';
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
        <a href={props.npm} target="_blank" rel="noopener noreferrer" aria-label="Install npm package">
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
