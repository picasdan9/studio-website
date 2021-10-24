import React from 'react';
import ReactMarkdown from 'react-markdown';
import TextMarkdownStyles from './TextMarkdownStyles.module.css';

const TextPostMarkdown: React.FC<{ slug: string; markdown: string }> = ({
  slug,
  markdown,
}) => (
  <ReactMarkdown
    children={markdown}
    components={{
      img: ({ src, alt }) => (
        <figure>
          <img
            src={`/texts/${slug}/${src}` || ''}
            className={TextMarkdownStyles['img']}
          />
          <figcaption>{alt}</figcaption>
        </figure>
      ),
      h1: 'h2',
      h2: 'h3',
    }}
  />
);

export default TextPostMarkdown;
