import Pagination from './pagination';

export default function WorksPagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === '2' ?
      '/works' :
      `/works/page/${parseInt(currentPage, 10) - 1}`;
  const nextPageUrl = `/works/page/${parseInt(currentPage, 10) + 1}`;

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
