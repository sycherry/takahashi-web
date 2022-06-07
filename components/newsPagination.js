import Pagination from './pagination';

export default function NewsPagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === '2' ?
      '/news' :
      `/news/page/${parseInt(currentPage, 10) - 1}`;
  const nextPageUrl = `/news/page/${parseInt(currentPage, 10) + 1}`;

  return (
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      prevDisabled={prevDisabled}
      nextDisabled={nextDisabled}
      prevPageUrl={prevPageUrl}
      nextPageUrl={nextPageUrl}
    />
  );
}
