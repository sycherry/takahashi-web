import React from 'react';
import Layout from '@components/layout';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import ContentfulApi from '@utils/contentfulApi';
import Image from 'next/image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Profile(props) {
  const { profileData } = props;
  const pageTitle = 'プロフィール';
  const pageDescription = '髙橋昌之建築事務所のプロフィールのページです。';
  const options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="mb-1">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="profile mb-6">{children}</ul>
      ),
    },
  };
  return (
    <>
      <Layout>
        <PageMeta
          title={`${pageTitle}`}
          description={pageDescription}
          url={`${Config.pageMeta.home.url}/profile`}
        />
        {profileData.map((profileData) => (
          <article className="max-w-screen-xl mx-auto" key="1">
            <div className="lg:flex lg:flex-row-reverse lg:px-10">
              <div className="md:mb-10 lg:mb-0 lg:pt-8 lg:flex-grow lg:pl-16 px-6 md:px-8 lg:px-0">
                <h2 className="text-xl mb-8 md:mb-10">
                  髙橋 昌之<span className="text-base md:ml-4 mt-2 md:mt-0 block md:inline">MASAYUKI TAKAHASHI</span></h2>
                {documentToReactComponents(profileData.text.json, options)}
              </div>
              <div className="lg:flex-none profile-photo">
                <Image src={profileData.image.url} alt="髙橋昌之"
                  height={1560} width={1260} />
              </div>
            </div>
          </article>
        ))}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const profileData = await ContentfulApi.getProfile();
  return {
    props: {
      profileData,
    },
  };
}
