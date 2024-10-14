// En el archivo Post.tsx
import { useState } from 'react';
import CommentsList from './CommentsList';

const Post = ({ user, content, initialComments }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(initialComments);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newComments = [...comments, { id: comments.length + 1, text: newComment }];
      setComments(newComments); // Añade el nuevo comentario a la lista
      setNewComment(''); // Limpiar el campo de entrada
    }
  };

  return (
    <div>
      <h4>{user}</h4>
      <p>{content}</p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Ocultar Comentarios' : 'Mostrar Comentarios'}
      </button>
      {showComments && (
        <div>
          <CommentsList comments={comments} />
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Añadir un comentario..."
          />
          <button onClick={handleAddComment}>Publicar</button>
        </div>
      )}
    </div>
  );
};

export default Post;
