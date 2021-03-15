import { useState } from 'react';
import { FaTrashAlt, FaEllipsisH } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import {
  Card,
  CardBody,
  CardTag,
  CardUserLogo,
  CardUser,
  CardActions,
  CardActionBtn,
} from './styles';
import './index.css';
import Likes from '../../Like';

function Post({ post }) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const { user, result } = auth.authData;

  const handleLike = () => {
    dispatch(likePost(post._id));
    setLike(!like);
  };

  return (
    <Card>
      <div className="card__header">
        <img src={post.selectedFile} alt={post.title} />
        <div>
          {(result?.googleId === post?.creator ||
            user?.id === post?.creator) && (
            <button
              className="post__overlay"
              onClick={() => history.push('/create-post', { postId: post._id })}
            >
              <FaEllipsisH />
            </button>
          )}
        </div>
      </div>
      <CardBody>
        <CardTag>{post.tags.map((tag) => `#${tag} `)}</CardTag>
        <h4 className="post__title">{post.title}</h4>
        <p className="post__message">{post.message}</p>
        <CardUser>
          <CardUserLogo color="pink">{post.username[0]}</CardUserLogo>
          <div className="user-info">
            <h3>{post.username}</h3>
            <small>{moment(post.createdAt).fromNow()}</small>
          </div>
        </CardUser>
        <CardActions>
          <CardActionBtn onClick={handleLike}>
            <Likes post={post} />
          </CardActionBtn>

          {(result?.googleId === post?.creator ||
            user?.id === post?.creator) && (
            <CardActionBtn onClick={() => dispatch(deletePost(post._id))}>
              <FaTrashAlt className="post__delete" />
            </CardActionBtn>
          )}
        </CardActions>
      </CardBody>
    </Card>
  );
}

export default Post;
