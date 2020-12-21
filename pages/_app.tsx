import { Provider } from "react-redux";
import Head from "next/head";
import { ThemeProvider, Container } from "@material-ui/core";
import store from "store/store";
import "fontsource-roboto";
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
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
          <div
            style={{
              display: "grid",
              gridTemplateRows: "60px 100% 80px",
              gridAutoColumns: "100%",
            }}
          >
            <header>
              <Navbar />
            </header>
            <main>
              <Container maxWidth="lg">
                <Component {...pageProps} />
              </Container>
            </main>
            <footer>
              <h1>FOOTER</h1>
            </footer>
          </div>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default MyApp;
