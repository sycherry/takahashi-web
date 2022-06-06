import Link from 'next/link';
import Pagination from '@components/worksPagination.js';
import Image from 'next/image';

export default function WorksList(props) {
  const { posts, currentPage, totalPages } = props;
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;
  return (
    <>
      <article className="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="mx-auto flex flex-wrap flex-set items-center">

          {posts.map((post) => (
            <Link href={`/works/${post.slug}`} key={post.sys.id} passHref>
              <div className="flex-item mr-6 md:mr-8 lg:mr-10 mb-6 md:mb-8 lg:mb-10 zoom-img relative group cursor-pointer ">
                <Image
                  src={post.image.url}
                  alt={`Cover Image for ${post.image.url}`}
                  width={800}
                  height={800}
                  blurDataURL={post.image.url}
                  placeholder="blur"
                  objectFit="cover"
                />
                <div className="z-20 absolute"></div>
                <div className="works-list-title mb-4 absolute inset-x-0 bottom-0 flex items-center
                  justify-center invisible group-hover:visible">
                  <p className="text-white text-sm md:text-sm lg:text-sm mx-6">{post.title}
                    <span className="lg:hidden ml-2 text-sm md:text-xs underline
                      text-md mt-1 md:mt-2 text-gold">more</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          nextDisabled={nextDisabled}
          prevDisabled={prevDisabled}
        />
      </article>
    </>
  );
}
