import { useSelector } from 'react-redux';
import { FaThumbsUp } from 'react-icons/fa';
import './index.css';

const Likes = ({ post }) => {
  const auth = useSelector((state) => state.auth);
  const { user, result } = auth.authData;

  if (post.likes.length > 0) {
    return post.likes.find(
      (like) => like === (result?.googleId || user?.id)
    ) ? (
      <>
        <FaThumbsUp className="post__like" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
      </>
    ) : (
      <>
        <FaThumbsUp className="post__like--light" />
        &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
      </>
    );
  }

  return (
    <>
      <FaThumbsUp className="post__like--light" />
      &nbsp;Like
    </>
  );
};

export default Likes;
