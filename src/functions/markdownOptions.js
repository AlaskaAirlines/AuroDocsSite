import React from "react";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import ExternalLink from "@alaskaairux/icons/dist/icons/interface/external-link-sm.svg?react";

function linkRenderer(props) {
  let pattern = /^((http|https|ftp):\/\/)/;

  if (pattern.test(props.href)) {
    // filter out links that are set to internal URLs
    if (props.href.toString().includes("auro.alaskaair.com")) {
      let url = props.href;
      url = url.toString().replace(/^.*\/\/[^/]+/, "");
      return <a href={url}>{props.children}</a>;
    } else {
      return (
        <a
          href={props.href}
          className="externalLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
          <ExternalLink />
        </a>
      );
    }
  } else if (!pattern.test(props.href)) {
    return <a href={props.href}>{props.children}</a>;
  }
}

export default {
  components: {
    a: linkRenderer,
  },
  remarkPlugins: [remarkGfm, remarkRehype],
  rehypePlugins: [[rehypeExternalLinks], rehypeHighlight, rehypeRaw],
};
