import { Metadata } from 'lib/models';
import TextMetadataListStyles from './TextMetadataListStyles.module.css';

const TextPostMetadataListItem: React.FC<Metadata> = ({
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
    <span className={TextMetadataListStyles['text-metadata']}>
      , {type}
      {externalSiteName && <>, {externalSiteName}</>}
    </span>
  </li>
);

export default TextPostMetadataListItem;
