import ContentfulApi from '@utils/contentfulApi';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';
import Layout from '@components/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ChevronRight from '@components/icon/chevronRight';

export default function PostWrapper(props) {
  const { post, worksTitleData } = props;
  const router = useRouter();
  // NEXT PROJECT BOTTON
  const postIndex = worksTitleData ? worksTitleData.findIndex((post) => post.slug === router.query.slug) : null;
  const previous = worksTitleData ? worksTitleData[postIndex + 1] : null;
  return (
    <Layout>
      <PageMeta
        title={post.title}
        description={`髙橋昌之建築設計事務所の施工事例の${post.title}のページです。`}
        url={`${Config.pageMeta.worksIndex.url}/${post.slug}`}
      />

      <article className="max-w-screen-lg mx-auto leading-none px-6 md:px-8 lg:px-10">

        <h1 className="text-lg mb-6 md:mb-8 lg:mb-10">{post.title}</h1>

        {post.galleryCollection.items.map((post) => (
          <div className="mb-6 md:mb-8 lg:mb-10" key={post.url}>

            <div style={{ position: 'relative', Width: post.widht + 'px', paddingBottom: (post.height / post.width) * 100 + '%' }}>
              <Image
                key={post.url}
                src={post.url}
                alt={`Cover Image for ${post.url}`}
                layout='fill'
                blurDataURL={post.url}
                placeholder="blur"
                objectFit="cover"
              /></div>
          </div>
        ))}

        {post.text && (
          <p className="max-w-xl mb-4">{post.text}</p>)}

        <div className="max-w-xl">
          <ul className="md:flex md:flex-wrap">
            {post.location && (<li className="md:w-1/2 md:pr-4">住&emsp;&emsp;所：{post.location}</li>)}
            {post.use && (<li className="md:w-1/2 md:pr-4">用&emsp;&emsp;途： {post.use}</li>)}
            {post.buildingArea && (<li className="w-1/2 md:pr-4">建築面積：{post.buildingArea}</li>)}
            {post.architecturalArea && (<li className="w-1/2 md:pr-4">延床面積：{post.architecturalArea}</li>)}
            {post.constitution && (<li className="w-1/2 md:pr-4">構&emsp;&emsp;造：{post.constitution}</li>)}
            {post.constructionwork && (<li className="w-1/2 md:pr-4">施&emsp;&emsp;工：{post.constructionwork}</li>)}
          </ul>
        </div>


        {(previous) && (
          <div className="py-4 md:py-7 lg:py-10 text-center">
            {previous && (
              <div>
                <p className="text-base mb-2">NEXT WORK</p>
                <div className="text-base
                  md:duration-500 md:hover:opacity-40
                  r">
                  <Link href={previous.slug} ><a>
                    <button className="flex items-center flex justify-center mx-auto">
                      <p>{previous.title}</p><p className="w-1.5 ml-2"><ChevronRight /></p></button>
                  </a></Link>
                </div>
              </div>
            )}
          </div>
        )}
      </article>


    </Layout>
  );
}

export async function getStaticPaths() {
  const blogPostSlugs = await ContentfulApi.getWorksAllPostSlugs();
  console.log(blogPostSlugs);
  const paths = blogPostSlugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await ContentfulApi.getWorksPostBySlug(params.slug);

  const worksTitleData = await ContentfulApi.getWorksTitle();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      worksTitleData,
    },
  };
}
