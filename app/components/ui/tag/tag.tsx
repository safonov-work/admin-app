import { FC } from 'react';
import { TagProps } from './tag.props';
import styles from './tag.module.scss';

export const Tag: FC<TagProps> = ({ count }: TagProps): JSX.Element => {
  return <span className={styles.tagSpan}>{count}M</span>;
};
