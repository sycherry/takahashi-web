import Link from 'next/link';
import ChevronLeft from './icon/chevronLeft';
import ChevronRight from './icon/chevronRight';

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;
  const prevPageUrl =
    currentPage === '2' ?
      '/works' :
      `/works/page/${parseInt(currentPage, 10) - 1}`;
  const nextPageUrl = `/works/page/${parseInt(currentPage, 10) + 1}`;

  return (
    <ol className="flex justify-between items-center">
      <li>
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <a>
              <div className="p-4 md:p-8">
                <div className="w-3"
                ><ChevronLeft />
                </div></div>
            </a>
          </Link>
        )}

        {prevDisabled && (
          <div className="p-4 md:p-8">
            <div className="w-3"></div>
          </div>)}
      </li>

      <li>{currentPage} / {totalPages}</li>

      <li>
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a>
              <div className="p-4 md:p-8">
                <div className="w-3"
                ><ChevronRight />
                </div></div>
            </a>
          </Link>
        )}

        {nextDisabled && (
          <div className="p-4 md:p-8">
            <div className="w-3"></div>
          </div>
        )}

      </li>
    </ol>
  );
}
