import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import flush from 'styled-jsx/server'
import PropTypes from 'prop-types';
import AmpPageHead from '../components/AmpPageHead';
import AmpPageBody from '../components/AmpPageBody';


export default class MyDocument extends Document {
/*
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
*/
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    const styles = flush()
    let amp = false
    head.forEach(element => {
      if (element.type == 'link' && element.props.rel == 'canonical') {
          amp = true
      }
    })
    // amp = true;
    return { ...page, styleTags, html, head, errorHtml, chunks, styles, amp }
  }

  static childContextTypes = {
    _documentProps: PropTypes.any
  }

  getChildContext () {
    return { _documentProps: this.props }
  }

  render () {
    if (this.props.amp) {
      return (
        <html>
          <AmpPageHead />
          <AmpPageBody />
        </html>
      );
    } else {
      return (
        <html>
          <Head>
            <title>Three Little Pigs Masonry</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic|Libre+Baskerville" rel="stylesheet" type="text/css" />
            <meta property="og:title" content="Three Little Pigs Masonry"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="http://www.threelittlepigsmasonry.com"/>
            <meta property="og:image" content="%PUBLIC_URL%/images/social-media/3LPM-og-banner.jpg"/>
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Three Little Pigs Masonry"/>
            <meta property="og:description" content="Three Little Pigs Masonry provides high quality masonry restoration and renovation services for the GTA home and business owner."/>
            <meta name="twitter:site" content="@3PigsMasonry" />
            <meta name="twitter:creator" content="@3PigsMasonry" />
            <meta name="twitter:image" content="%PUBLIC_URL%/images/social-media/3LPM-twitter-card.jpg" />
            <meta name="twitter:summary_large_image" content="%PUBLIC_URL%/images/social-media/3LPM-twitter-card-large.jpg" />
            <script src="https://use.fontawesome.com/94c5c8189a.js"></script>          
            {this.props.styleTags}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      )
    }
  }
}
