import React from "react";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

export default {
  remarkPlugins: [remarkGfm, remarkRehype],
  rehypePlugins: [rehypeRaw, rehypeHighlight],
};
