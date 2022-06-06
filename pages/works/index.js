import React from 'react';
import ContentfulApi from '@utils/contentfulApi';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import Layout from '@components/layout';
import WorksList from '@components/worksList.js';

export default function BlogIndex(props) {
  const {
    postSummaries,
    currentPage,
    totalPages,
  } = props;

  const pageTitle = '施工事例';
  const pageDescription = '髙橋昌之建築設計事務所の施工事例の一覧ページです。';

  return (
    <Layout>
      <PageMeta
        title={pageTitle}
        description={pageDescription}
        url={Config.pageMeta.blogIndex.url}
      />

      <WorksList
        posts={postSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
      />

    </Layout>
  );
}
export async function getStaticProps({ preview = false }) {
  const postSummaries = await ContentfulApi.getWorksPaginatedPostSummaries(1);
  const totalPages = Math.ceil(
    postSummaries.total / Config.pagination.pageSize,
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
