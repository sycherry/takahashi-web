import Link from 'next/link';
import ChevronLeft from './icon/chevronLeft';
import ChevronRight from './icon/chevronRight';

export default function Pagination({ totalPages, currentPage, prevDisabled,
  nextDisabled, prevPageUrl, nextPageUrl }) {
  return (
    <ol className="flex justify-between items-center">
      <li>
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <a>
              <div className="p-4 md:p-8">
                <div className="w-2.5"><ChevronLeft /></div></div>
            </a>
          </Link>
        )}

        {prevDisabled && (
          <div className="p-4 md:p-8">
            <div className="w-2.5"></div>
          </div>)}
      </li>

      <li>{currentPage} / {totalPages}</li>

      <li>
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a>
              <div className="p-4 md:p-8">
                <div className="w-2.5"
                ><ChevronRight />
                </div></div>
            </a>
          </Link>
        )}

        {nextDisabled && (
          <div className="p-4 md:p-8">
            <div className="w-2.5"></div>
          </div>)}

      </li>
    </ol>
  );
}
