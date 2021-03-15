import { useState } from 'react';
import Post from './Post';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import './index.css';
import Pagination from '../Pagination';

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const posts = useSelector((state) => state.posts);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return !currentPosts.length ? (
    <Loader />
  ) : (
    <section className="container">
      <div className="posts">
        {currentPosts.map((post) => (
          <div key={post._id}>
            <Post post={post} />
          </div>
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section>
  );
}

export default Posts;
