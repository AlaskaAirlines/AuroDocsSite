import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import '~/sass/markdown.scss';

/**
 * Fetch the markdown file and render the content.
 * @param {string} markdown - The path to the markdown file.
 * @private
 * @returns {ReactDOM}
 */
const RenderRemoteMarkdown = ({ markdownUrl }) => {
  const [text, setText] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(markdownUrl);
      const text = await response.text();
      setText(text);
    };

    fetchData();
  }, [markdownUrl]);

  return (
    <div>
      {text && (
        <ReactMarkdown
          children={text}
          {... markdownOptions}
        />
      )}
    </div>
  );
};

export default RenderRemoteMarkdown;
