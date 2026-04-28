import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import markdownOptions from "~/functions/markdownOptions";
import '~/sass/markdown.scss';

/**
 * Add copy buttons to all code blocks in the rendered markdown.
 * @param {HTMLElement} container - The container element to search for code blocks.
 * @private
 */
function addCopyButtons(container) {
  container.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
    // Skip if already wrapped
    if (pre.parentNode.classList.contains('pre-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'pre-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      const raw = code ? code.textContent : pre.textContent;
      const text = raw.replace(/\u200B/g, '').replace(/^\n+/, '').replace(/\n+$/, '\n').replace(/^\$ /, '');
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 1500);
      });
    });
    wrapper.appendChild(btn);
  });
}

/**
 * Open a specific accordion by ID and scroll to it.
 * @param {string} id - The ID of the accordion element to open.
 */
function openAccordion(id) {
  document.querySelectorAll('auro-accordion').forEach((accordion) => {
    accordion.removeAttribute('expanded');
  });
  const target = document.getElementById(id);
  if (target) {
    target.setAttribute('expanded', '');
    setTimeout(() => {
      const headerOffset = 80; // sticky header height + padding
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }, 550);
  }
}

/**
 * Fetch the markdown file and render the content.
 * @param {string} markdown - The path to the markdown file.
 * @private
 * @returns {ReactDOM}
 */
const RenderRemoteMarkdown = ({ markdownUrl }) => {
  const [text, setText] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(markdownUrl);
      let text = await response.text();

      // React strips inline onclick string attributes, so convert them to
      // data attributes that survive rendering and can be bound after mount
      text = text.replace(/onclick="openAccordion\('([^']+)'\)"/g, 'data-open-accordion="$1"');

      setText(text);
    };

    fetchData();
  }, [markdownUrl]);

  // Make openAccordion available globally for onclick handlers in markdown
  useEffect(() => {
    window.openAccordion = openAccordion;
    return () => { delete window.openAccordion; };
  }, []);

  // Add copy buttons and bind accordion click handlers after markdown content renders
  useEffect(() => {
    if (text && containerRef.current) {
      addCopyButtons(containerRef.current);

      // Bind click listeners from data-open-accordion attributes
      containerRef.current.querySelectorAll('[data-open-accordion]').forEach((el) => {
        const id = el.getAttribute('data-open-accordion');
        el.addEventListener('click', (e) => {
          e.preventDefault();
          openAccordion(id);
        });
      });
    }
  }, [text]);

  return (
    <div ref={containerRef}>
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
