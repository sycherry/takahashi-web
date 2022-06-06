import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import { useForm, ValidationError } from '@formspree/react';
import { Config } from '@utils/config';
import PageMeta from '@components/pageMeta';

function ContactForm() {
  const [state, handleSubmit] = useForm('contactForm');
  const pageTitle = 'お問い合わせ';
  const pageDescription = '髙橋昌之建築事務所のお問い合わせのページです。';

  useEffect(() => {
    const toggleInputContainer = (input) => {
      if (input.value != '') {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    };
    const inputs = document.getElementsByClassName('input');
    for (let i = 0; i < inputs.length; i++) {
      console.log('looped');
      inputs[i].addEventListener('keyup', () => {
        toggleInputContainer(inputs[i]);
      });
      toggleInputContainer(inputs[i]);
    }
  }, []);

  return (
    <Layout>
      <PageMeta
        title={`${pageTitle}`}
        description={pageDescription}
        url={`${Config.pageMeta.blogIndex.url}/contact`}
      />
      <article className="max-w-xl mx-auto px-6 md:px-8 lg:px-10">
        <h2
          className="text-xl md:text-2xl mb-6 md:mb-8 lg:mb-10 uppercase"
        >Contact
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input id="name" type="text" name="name"
              className="text-base input border border-gray-400
              appearance-none  w-full
              px-3 py-3 pt-7 pb-2 focus
              focus:outline-none focus:border-black
              focus:border-2  active:border-black" autoFocus />
            <label htmlFor="name"
              className="label font-light absolute mb-0 -mt-2 pt-4 pl-3
              leading-tighter text-gray-400 mt-2 cursor-text">名前</label>
          </div>
          <ValidationError
            prefix="Name"
            field="neme"
            errors={state.errors}
          />

          <div className="mb-4 relative">
            <input id="email" type="email" name="email"
              className="text-base input border border-gray-400 appearance-none
              w-full px-3 py-3 pt-7 pb-2 focus focus:outline-none
              focus:border-black focus:border-2
              active:border-black"/>
            <label htmlFor="email" className="label font-light
              absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter
              text-gray-400  mt-2 cursor-text">メール</label>
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <div className="mb-4 relative">
            <textarea name="message" id="message" cols="10" rows="6"
              className="text-base input border border-gray-400 appearance-none
              w-full px-3 py-3 pt-7 pb-2 focus focus:outline-none
              focus:border-black focus:border-2
              active:border-black"></textarea>
            <label htmlFor="message"
              className="label font-light absolute mb-0 -mt-2 pt-4 pl-3
              leading-tighter text-gray-400 mt-2 cursor-text">内容</label>
          </div>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}
            className="font-light
            py-3 px-6 rounded text-white md:duration-500">送信</button>

          {state.succeeded ?
            <><p className="mt-6"> メッセージは送信されました。</p>
              <p> お問い合わせありがとうございます。</p>
            </> : null}

          <input type="hidden" name="_subject"
            value="ホームページから新しいメッセージが届きました" />
        </form>

        <p className="text-xs mt-6 underline hover:no-underline
          text-center uppercase">
          <Link href={`/privacy/`}>Privacy policy</Link></p>
      </article>
    </Layout>
  );
}
export default ContactForm;
