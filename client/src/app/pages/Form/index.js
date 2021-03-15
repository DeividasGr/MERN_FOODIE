import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import Input from '../../components/Input';
import { Textarea, FormCreate, FormTitle } from '../../pages/Form/styles';
import Button from '../../components/Button';

function Form() {
  const { postId } = useLocation().state || {};
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.find((post) => post._id === postId)
  );
  const [postData, setPostData] = useState({
    title: post?.title || '',
    message: post?.message || '',
    tags: post?.tags || '',
    selectedFile: post?.selectedFile || '',
  });
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleFileSelect = ({ base64 }) => {
    setPostData({ ...postData, selectedFile: base64 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!postId) {
      dispatch(
        createPost({
          ...postData,
          username: user?.user?.username || user?.result?.name,
        })
      );
    } else {
      dispatch(
        updatePost(postId, {
          ...postData,
          username: user?.user?.username || user?.result?.name,
        })
      );
    }
    history.push('/');
  };

  const clearForm = () => {
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <FormCreate>
      <FormTitle>Create a Post</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={handleInputChange}
        />
        <Input
          name="tags"
          type="text"
          placeholder="Name few tags"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <Textarea
          name="message"
          placeholder="Enter description"
          value={postData.message}
          onChange={handleInputChange}
        />
        <div>
          <FileBase type="file" multiple={false} onDone={handleFileSelect} />
        </div>
        <Button type="submit" color="primary" font>
          {!postId ? 'Sumbit' : 'Update'}
        </Button>

        {!postId ? (
          <Button type="button" onClick={clearForm} color="danger" hoverColor>
            Clear
          </Button>
        ) : (
          ''
        )}
      </form>
    </FormCreate>
  );
}

export default Form;
