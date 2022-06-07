import ContentfulApi from '@utils/contentfulApi';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import PostList from '@components/newsList';
import React from 'react';
import Layout from '@components/layout';

export default function BlogIndex(props) {
  const {
    postSummaries,
    currentPage,
    totalPages,
  } = props;
  const pageTitle = 'ニュース';
  const pageDescription = '髙橋昌之建築設計事務所のニュースの一覧ページです。最新情報や施工事例などのご紹介をします';

  return (
    <Layout>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        url={Config.pageMeta.blogIndex.url}
      />
      <PostList
        posts={postSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(1);
  const totalPages = Math.ceil(
    postSummaries.total / Config.paginationNews.pageSize,
  );
  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: '1',
    },
  };
}
