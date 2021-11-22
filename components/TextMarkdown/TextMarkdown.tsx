import React from 'react';
import ReactMarkdown from 'react-markdown';

import TextMarkdownStyles from './TextMarkdownStyles.module.css';

const TextPostMarkdown: React.FC<{ slug: string; markdown: string }> = ({
  slug,
  markdown,
}) => (
  <ReactMarkdown
    components={{
      img({ src, alt }) {
        return (
          <figure className={TextMarkdownStyles['figure']}>
            <img
              src={`/texts/${slug}/${src}` || ''}
              className={TextMarkdownStyles['img']}
              alt={`An image for ${slug}$`}
            />
            <figcaption>{alt}</figcaption>
          </figure>
        );
      },
    }}
  >
    {markdown}
  </ReactMarkdown>
);

export default TextPostMarkdown;
