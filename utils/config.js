const SITE_URL = 'https://nextjs-contentful-blog-starter.vercel.app';

export const Config = {
  site: {
    title: '髙橋昌之建築設計事務所',
  },
  pageMeta: {
    openGraph: {
      twitterUser: 'takahashiOffice',
    },
    home: {
      url: SITE_URL,
      slug: '/',
    },
    blogIndex: {
      url: `${SITE_URL}/news`,
      slug: '/news',
    },
    blogIndexPage: {
      slug: '/news/page/[page]',
    },
    post: {
      slug: '/news/[slug]',
    },
    notFound: {
      url: SITE_URL,
      slug: '/404',
    },
  },
  pagination: {
    pageSize: 2,
    recentPostsSize: 3,
  },
  paginationWorks: {
    pageSize: 3,
  },
};
