import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <>
      <Layout>
        <article className="max-w-screen-xl mx-auto mx-10">
          <div className="text-center mx-4">
            <span className="font-bold">404エラー</span>
            <h2 className="mb-2 font-bold" >ページが見つかりません</h2>
            <p className="mb-6 ">お探しのページは、移動または削除された可能性があります。</p>
            <div>
              <Link href="/">
                <a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white
                                text-center font-semibold leading-none bg-gray-400 hover:bg-gray-500 rounded wow animate__animated animate__fadeIn" >
                                    HOME</a></Link>
              <Link href="/contact">
                <a className="block sm:inline-block py-4 px-8 text-xs text-white
                               text-center font-semibold leading-none bg-gray-400 hover:bg-gray-500  rounded">
                                    CONTACT</a></Link>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Custom404;
