import Document, { Head, Html, Main, NextScript } from 'next/document';

import META from './meta.json';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=optional"
            rel="stylesheet"
          />

          {/* Links*/}
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href={META.siteUrl}></link>

          {/* Meta */}
          <meta
            name="description"
            content={META.description}
            key="description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
