import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="Angelia Cuaca" content="Resume page" />
          <link rel="apple-touch-icon" href="/favicon.svg" />

          <link rel="manifest" href="/manifest.json" />
          <script
            src="https://kit.fontawesome.com/3434adee82.js"
            crossOrigin="anonymous"
          ></script>

          <title>Angelia Cuaca - Resume</title>
        </Head>
        <body data-page={pageProps.isPrint && "print"}>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
