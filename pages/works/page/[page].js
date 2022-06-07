import React from 'react';
import ContentfulApi from '@utils/contentfulApi';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import Layout from '@components/layout';
import WorksList from '@components/worksList.js';

export default function BlogIndexPage(props) {
  const {
    postSummaries,
    totalPages,
    currentPage,
  } = props;

  const pageTitle = '施工事例';
  const pageDescription = '髙橋昌之建築設計事務所の施工事例の一覧ページです。';

  return (
    <Layout>
      <PageMeta
        title={`${pageTitle}  ページ${currentPage}`}
        description={pageDescription}
        url={`${Config.pageMeta.worksIndex.url}/page/${currentPage}`}
      />

      <WorksList
        posts={postSummaries}
        totalPages={totalPages}
        currentPage={currentPage}
      />

    </Layout>
  );
}

export async function getStaticPaths() {
  const totalPosts = await ContentfulApi.getWorksTotalPostsNumber();
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

export async function getStaticProps({ params, preview = false }) {
  const postSummaries = await ContentfulApi.getWorksPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(
    postSummaries.total / Config.paginationWorks.pageSize,
  );

  return {
    props: {
      preview,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
    },
  };
}
