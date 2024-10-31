import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
//import '~/sass/markdown.scss';
import 'prismjs/themes/prism.css';

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
          remarkPlugins={[remarkGfm,remarkRehype]}
          rehypePlugins={[[rehypeExternalLinks, {content: { type: 'text' , value: '' }}], rehypeHighlight,rehypeRaw]}
        />
      )}
    </div>
  );
};

export default RenderRemoteMarkdown;
