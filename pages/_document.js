import React from "react";
import Document, {Head, Html, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
// import '@/styles/js/jquery.themepunch.tools.min';
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
              <Head>
              </Head>
              <body>
                <Main />
                <NextScript />
                {/* <script type="text/javascript" src="/js/jquery.min.js"></script>
                <script type="text/javascript" src="/js/jquery.themepunch.tools.min.js"></script>
                <script type="text/javascript" src="/js/jquery.themepunch.revolution.min.js"></script>
                <script type="text/javascript" src="/js/extensions/revolution.extension.slideanims.min.js"></script>
                <script type="text/javascript" src="/js/extensions/revolution.extension.layeranimation.min.js"></script>
                <script type="text/javascript" src="/js/extensions/revolution.extension.navigation.min.js"></script>
                <script type="text/javascript" src="/js/extensions/revolution.extension.parallax.min.js"></script> */}
                {/* <script type="text/javascript" src="/js/jquery.revolution.js"></script> */}
              </body>
            </Html>
        );
    }

    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;
        const sheet = new ServerStyleSheet();
        try {
            ctx.renderPage = () =>
              originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
              });
      
            const initialProps = await Document.getInitialProps(ctx);
            return {
              ...initialProps,
              styles: (
                <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
                </>
              ),
            };
          } finally {
            sheet.seal();
          }
    }
}

export default MyDocument