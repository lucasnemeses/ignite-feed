import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

import PropTypes from 'prop-types';

import { Trash, ThumbsUp } from "phosphor-react";

import styles from './Comment.module.css';
import { Avatar } from "./Avatar";

export function Comment({ id, content, author, published_at, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeCount() {
    setLikeCount(prevState => prevState + 1);
  }

  const publishedDateFormatted = format(published_at, "'Cerca de' 1h 'atrás'", {
    locale,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(published_at, {
    locale,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/lucasnemeses.png" noBorder />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>
              <time title={publishedDateFormatted} dateTime={published_at}>
                {publishedDateRelativeToNow}
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}


Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  published_at: PropTypes.instanceOf(Date).isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};
