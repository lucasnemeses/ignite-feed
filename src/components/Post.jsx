import { format, formatDistanceToNow } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';

import PropTypes from 'prop-types';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, content, published_at }) {
  const [comments, setComments] = useState([{
    id: '1',
    author: 'Lucas Meneses',
    content: 'Muito bom, parabéns!!',
    published_at: new Date('2024-03-06 9:44:00'),
  }]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(published_at, "d 'de' LLLL 'às' HH:mm", {
    locale,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(published_at, {
    locale,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();

    if (!newCommentText) return;

    const newComment = {
      id: String(comments.length + 1),
      author: 'Lucas Meneses',
      content: newCommentText,
      published_at: new Date(),
    };

    setComments(prevState => ([
      ...prevState,
      newComment,
    ]));
    setNewCommentText('');
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('Essa campo é obrigatório!');
  }

  function deleteComment(id) {
    setComments(prevState => {
      return prevState.filter(comment => comment.id !== id);
    });
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={published_at}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe seu comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={!newCommentText}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            {...comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}

Post.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  published_at: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.array.isRequired,
};
