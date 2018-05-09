import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import flush from "styled-jsx/server";
import PropTypes from "prop-types";
import AmpPageHead from "../components/AmpPageHead";

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const sheet = new ServerStyleSheet();

    // Note: 'page' and 'styleTags' vars will prevent the screen from flashing the unformatted page before styles are applied
    const page = renderPage(App => {
      return props => {
        return sheet.collectStyles(<App {...props} />);
      };
    });
    const styleTags = sheet.getStyleElement();

    const styles = flush();
    let amp = false;
    head.forEach(element => {
      if (element.type == "link" && element.props.rel == "canonical") {
        amp = true;
      }
    });
    // amp = true;
    return {
      ...page,
      styleTags,
      html,
      head,
      errorHtml,
      chunks,
      styles,
      amp
    };
  }

  static childContextTypes = {
    _documentProps: PropTypes.any
  };

  getChildContext() {
    return { _documentProps: this.props };
  }

  render() {
    console.log();
    if (this.props.amp) {
      const { html } = this.props;
      return (
        <html amp="">
          <Head>
            <meta
              name="viewport"
              content="width=device-width,minimum-scale=1"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto"
            />
            <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
            <noscript>
              <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
            </noscript>
            <style amp-custom="">{`
              body
              {
                font-family: Open Sans, sans-serif;
                padding: 0px;
                color: #444;
                margin: 0px;
                background-color: #eee;
                line-height: 1.6;
              }
              h1 {
                font-family: Libre Baskerville;
                font-size: 1.2em;
                color: #841F27;
                margin-left: 5px;
              }
              .byline {
                color: #aaa; margin-bottom: 25px;
              }
              .caption {
                color: #ccc;
                margin-top: 0;
                font-size: 14px;
                text-align: center;
              }
              p {
                padding: 5px;
                margin: 0px 5px;
                background-color: #fff;
              }
              .nameTag {
                font-style: italic;
                color: #999;
              }
              .headerImg {
                margin-left: 0px;
                background-color: #eee;
              }
              .headerBar {
                backgroundColor: #eee;
                margin-left: 0px;
                margin-right: 0px;
                padding: 5px;
              }
              .contentBlock {
                background-color: #fff;
                margin: 5px 10px 20px 10px;
                padding: 5px 0px 20px 0px;
              }
              .titleBlock {
                background-color: #fff;
                margin: 5px 10px 5px 10px;
              }
              .centerBlock {
                text-align: center;
              }
              .buttonRow {
                padding-bottom: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: flex-start;
              }
              .carousel {
                margin: 0px 11px 5px 11px;
              }
              .preview-button {
                border: 1px solid #ddd;
                margin-left: 3px;
                margin-right: 3px;
              }
              .testimonialContainer {
                display: flex;
                justify-content: center;
                text-align: center;
              }
              .testimonialCard {
                margin-left: 20px;
                margin-right: 20px;
                text-align: justify;
                font-size: 0.9em;
                color: #666;
                line-height: 1.3;
              }
              .testimonialTitleBar {
                height: 1.4em;
                background-color: #6d84b4;
                color: #FFD700;
                padding: 2px 2px 2px 6px;
                margin-top: -5px;
              }
              .footer p {
                color: #777;
                background-color: #eee;
                margin: 15px;
              }
              .btn {
                background: #3b5998;
                background-image: -webkit-linear-gradient(top, #1DA1F2, #3b5998);
                background-image: -moz-linear-gradient(top, #1DA1F2, #3b5998);
                background-image: -ms-linear-gradient(top, #1DA1F2, #3b5998);
                background-image: -o-linear-gradient(top, #1DA1F2, #3b5998);
                background-image: linear-gradient(to bottom, #1DA1F2, #3b5998);
                font-family: Arial;
                color: #ffffff;
                text-decoration: none;
              }
              .btn:hover {
                background: #1DA1F2;
                background-image: -webkit-linear-gradient(top, #99ceef, #1DA1F2);
                background-image: -moz-linear-gradient(top, #99ceef, #1DA1F2);
                background-image: -ms-linear-gradient(top, #99ceef, #1DA1F2);
                background-image: -o-linear-gradient(top, #99ceef, #1DA1F2);
                background-image: linear-gradient(to bottom, #99ceef, #1DA1F2);
                text-decoration: none;
                cursor: pointer;
              }
              .btn:visited, .btn:active, .btn:focus {
                outline: none;
              }
              .btnLarge {
                -webkit-border-radius: 5;
                -moz-border-radius: 5;
                border-radius: 5px;
                font-size: 5px;
                padding: 10px 20px 10px 20px;
                font-size: 18px;
              }
              .btnSmall {
                -webkit-border-radius: 12;
                -moz-border-radius: 12;
                border-radius: 12px;
                font-size: 16px;
                padding: 8px 15px 8px 15px;
              }
              .carousel-preview {
                padding-top: 10px;
              }
           `}
            </style>
              <script async src="https://cdn.ampproject.org/v0.js" />
              <script
            async
            custom-element="amp-carousel"
            src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
          />
          <script
            async
            custom-element="amp-fit-text"
            src="https://cdn.ampproject.org/v0/amp-fit-text-0.1.js"
          />
          <script
            async
            custom-element="amp-list"
            src="https://cdn.ampproject.org/v0/amp-list-0.1.js"
          />
          <script
            async
            custom-template="amp-mustache"
            src="https://cdn.ampproject.org/v0/amp-mustache-0.1.js"
          />
          <script
            async
            custom-element="amp-form"
            src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
          />
          </Head>
          <body>
            <div id="__next" dangerouslySetInnerHTML={{ __html: html }} />
          </body>
        </html>
      );
    }
    return (
      <html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-118818499-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-118818499-1');
          `
            }}
          />

          <title>Three Little Pigs Masonry</title>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1, initial-scale=1"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,400italic|Libre+Baskerville"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://s3.ca-central-1.amazonaws.com/3lpm/website/images/favicon.ico"
          />

          <meta property="og:title" content="Three Little Pigs Masonry" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://www.threelittlepigsmasonry.ca"
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/images/social-media/3LPM-og-banner.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Three Little Pigs Masonry" />
          <meta
            property="og:description"
            content="Three Little Pigs Masonry provides high quality masonry restoration and renovation services for the GTA home and business owner."
          />
          <meta name="twitter:site" content="@3PigsMasonry" />
          <meta name="twitter:creator" content="@3PigsMasonry" />
          <meta
            name="twitter:image"
            content="%PUBLIC_URL%/images/social-media/3LPM-twitter-card.jpg"
          />
          <meta
            name="twitter:summary_large_image"
            content="%PUBLIC_URL%/images/social-media/3LPM-twitter-card-large.jpg"
          />
          <script src="https://use.fontawesome.com/94c5c8189a.js" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-115860130-1"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
