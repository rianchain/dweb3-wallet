import Image from "next/image";
import DynamicWalletNavbar from '../components/DynamicWalletNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DynamicWalletNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
