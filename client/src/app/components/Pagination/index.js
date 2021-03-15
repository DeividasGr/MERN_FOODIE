import { Pages, PagesList, PageListNumber } from './styles';
import './index.css';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pages>
      <PagesList>
        {pageNumbers.map((number, index) => (
          <PageListNumber
            onClick={() => paginate(number)}
            key={index}
            className={currentPage === number ? 'active' : 'non-active'}
          >
            {number}
          </PageListNumber>
        ))}
      </PagesList>
    </Pages>
  );
}

export default Pagination;
