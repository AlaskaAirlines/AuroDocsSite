/**
 * Build the markdown shown when a document cannot be loaded.
 * @param {string} url - The location the document was requested from.
 * @returns {string} Markdown content describing the failure.
 * @private
 */
const unavailableContent = (url) => `## Documentation unavailable

This page is built from a markdown document that could not be loaded from [${url}](${url}).

The document may have been moved or renamed. Please report this on the [Auro doc site issue tracker](https://github.com/AlaskaAirlines/AuroDocsSite/issues) so the link can be restored.`;

/**
 * Fetch a markdown document for rendering on a doc site page.
 *
 * GitHub answers a request for a missing file with a 404 whose body is the
 * plain text `404: Not Found`. Reading the body without checking the status
 * hands that string to the markdown renderer, and the page publishes it as
 * documentation, so a renamed or moved document silently becomes a page that
 * reads `404: Not Found`.
 *
 * @param {string} url - The location of the markdown document.
 * @returns {Promise<string>} The document, or a notice when it cannot be loaded.
 */
const fetchMarkdown = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Unable to load markdown from ${url} (${response.status} ${response.statusText})`);

      return unavailableContent(url);
    }

    return await response.text();
  } catch (error) {
    console.error(`Unable to load markdown from ${url}`, error);

    return unavailableContent(url);
  }
}

export default fetchMarkdown;
