import PublishedDate from '@utils/publishedDate';
import Pagination from '@components/newsPagination';
import RichTextPageContent from '.././utils/newsRichText';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export default function PostList(props) {
  const { posts, currentPage, totalPages } = props;
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;
  return (
    <article className="mb-10 md:mb-20 g:mb-24 px-6 md:px-8 lg:px-10 pt-6 md:pt-8 lg:pt-10 max-w-screen-lg mx-auto">
      <ul>
        <Accordion allowZeroExpanded>
          {posts.map((post) => (
            <AccordionItem key={post.sys.id}>
              <AccordionItemButton>
                <li key={post.sys.id} className="group">
                  <div>

                    <a>
                      <div className="flex items-center py-4 md:py-4 lg:py-4
                 md:transition md:duration-500 hover:opacity-40">
                        <div className="text-base w-20">
                          <PublishedDate date={post.date} /></div>
                        <h2 className="news text-base pr-4 relative">{post.title}</h2>
                      </div>
                    </a>

                  </div>
                </li>
              </AccordionItemButton>
              <AccordionItemPanel>
                <RichTextPageContent richTextBodyField={post.body} renderH2Links={true} />
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </article>
  );
}
