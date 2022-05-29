import { Metadata } from 'lib/models';

const TextEntry: React.FC<Metadata> = ({
  slug,
  url,
  title,
  type,
  externalSiteName,
}) => (
  <li>
    <a href={url || `texts\\${slug}`}>
      <i>{title}</i>
    </a>
    <span>
      , {type}
      {externalSiteName && <>, {externalSiteName}</>}
    </span>
  </li>
);

export default TextEntry;
