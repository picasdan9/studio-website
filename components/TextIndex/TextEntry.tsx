import { Metadata } from 'lib/models';

const TextEntry: React.FC<Metadata> = ({
  slug,
  url,
  title,
  type,
  externalSiteName,
}) => {
  const anchorTagProps = url
    ? {
        href: url,
        target: '_blank',
        rel: 'noreferrer',
      }
    : {
        href: `texts\\${slug}`,
      };
  return (
    <li>
      <a {...anchorTagProps}>
        <i>{title}</i>
      </a>
      <span>
        , {type}
        {externalSiteName && <>, {externalSiteName}</>}
      </span>
    </li>
  );
};

export default TextEntry;
