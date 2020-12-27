import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider, Container } from "@material-ui/core";
import store from "store/store";
import "fontsource-roboto";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import theme from "theme";
import classes from "styles/app.module.scss";
import "styles/styles.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className={classes.App}>
            <header style={{ marginBottom: "60px" }}>
              <Navbar />
            </header>
            <Container className={classes.Main} maxWidth="lg">
              <main>
                <Component {...pageProps} />
              </main>
            </Container>
            <Footer />
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
