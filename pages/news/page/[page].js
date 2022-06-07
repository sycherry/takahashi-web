import ContentfulApi from '@utils/contentfulApi';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import PostList from '@components/newsList';
import Layout from '@components/layout';

export default function BlogIndexPage(props) {
  const {
    postSummaries,
    totalPages,
    currentPage,
  } = props;

  const pageTitle = 'ニュース';
  const pageDescription = '髙橋昌之建築設計事務所のニュースの一覧ページです。最新情報や施工事例などのご紹介をします';

  return (
    <Layout>
      <PageMeta
        title={`${pageTitle} ページ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.blogIndex.url}/page/${currentPage}`}
      />
      <PostList
        posts={postSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getTotalNewsNumber();
  const totalPages = Math.ceil(totalPosts / Config.paginationNews.pageSize);
  const paths = [];

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postSummaries = await ContentfulApi.getPaginatedNewsSummaries(
    params.page,
  );
  const totalPages = Math.ceil(
    postSummaries.total / Config.paginationNews.pageSize,
  );
  return {
    props: {
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
    },
  };
}
