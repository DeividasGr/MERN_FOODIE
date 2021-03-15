import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Hero from '../../components/Hero';
import Posts from '../../components/Posts';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Posts />
    </>
  );
}

export default Home;
