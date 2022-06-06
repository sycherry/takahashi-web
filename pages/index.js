import React from 'react';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import ContentfulApi from '@utils/contentfulApi';
import Layout from '@components/layout';
import Image from 'next/image';

export default function Home(props) {
  const { heroImageData } = props;
  const pageTitle = '髙橋昌之建築事務所のウェブサイト';
  const pageDescription = '髙橋昌之建築事務所のウェブサイトです。';
  return (
    <>
      <Layout>
        <PageMeta
          title={pageTitle}
          description={pageDescription}
          url={Config.pageMeta.home.url}
        />
        <div className="main_imgBox">
          {heroImageData[0].galleryCollection.items.map((post) => (
            <div className="mb-4 main_img" key={post.url}>
              <Image
                layout="fill"
                objectFit='cover'
                objectPosition='center'
                alt="画像"
                title="画像"
                src={post.url}
              />
            </div>
          ))} </div>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const heroImageData = await ContentfulApi.getTop();
  return {
    props: {
      heroImageData,
    },
  };
}