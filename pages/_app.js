import '../styles/globals.css';
import { FormspreeProvider } from '@formspree/react';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <FormspreeProvider project="1564698868728201030">
      <Component {...pageProps} key={router.route} />
    </FormspreeProvider>
  );
}
export default MyApp;
