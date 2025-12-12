import { Keyword } from "../keyword/Keyword";

/**
 * Splits a text string into normal text and hashtag elements,
 * replacing each hashtag (`#word`) with a `<Keyword>` component.
 *
 * This function preserves the original text layout and returns
 * an array of strings and React nodes suitable for direct rendering.
 *
 * @function renderWithHashtags
 * @param {string} text - The input text that may contain hashtags.
 * @returns {(string | React.ReactNode)[]} A list of text segments and `<Keyword>` components.
 */
export function renderWithHashtags(text: string) {
  const regex = /#\w+/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const { index } = match;

    // normal text before hashtag
    if (index > lastIndex) {
      parts.push(text.substring(lastIndex, index));
    }

    // hashtag
    parts.push(<Keyword key={index}>{match[0]}</Keyword>);

    lastIndex = index + match[0].length;
  }

  // remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}
