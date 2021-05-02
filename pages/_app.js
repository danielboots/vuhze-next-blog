import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <h1>Vuhze</h1>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
