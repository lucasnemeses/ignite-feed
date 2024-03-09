import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

export function Avatar({ src, noBorder = false }) {
  return (
    <figure className={noBorder ? styles.avatar : styles.avatarWithBorder }>
      <img src={src} />
    </figure>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  noBorder: PropTypes.bool,
};
