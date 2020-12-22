import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider, Container } from "@material-ui/core";
import store from "store/store";
import "fontsource-roboto";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import theme from "theme";
import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <header style={{ marginBottom: "60px" }}>
            <Navbar />
          </header>
          <main>
            <Container maxWidth="lg">
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
