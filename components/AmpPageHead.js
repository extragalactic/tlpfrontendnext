import React from 'react';
import PropTypes from 'prop-types';

class AmpPageHead extends React.Component {
  static contextTypes = {
    _documentProps: PropTypes.any,
  };

  render() {
    const { head, styles, __NEXT_DATA__ } = this.context._documentProps;
    const {
      pathname, buildId, assetPrefix, nextExport,
    } = __NEXT_DATA__;
    const pagePathname = getPagePathname(pathname, nextExport);

    return (
      <head {...this.props}>
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
          content="http://www.threelittlepigsmasonry.com"
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
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <title>Three Little Pigs Masonry</title>

        <style amp-custom>
          {`
          body {
            font-family: 'Open Sans', sans-serif;
            font-size: 1em;
            line-height: 1.6;
            background-color: #eee;
            padding: 0px;
            margin: 0px;
          }
          h1 {
            font-family: 'Libre Baskerville';
            font-size: 1.2em;
            color: #841F27;
            margin-left: 5px;
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
            background-color: #841F27;
          }
          .headerBar {
            backgroundColor: #841F27;
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
        <style amp-custom>
          {
            'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'
          }
        </style>
        {(head || []).map((h, i) => {
          return React.cloneElement(h, { key: i });
        })}
        {styles || null}
        {this.props.children}
      </head>
    );
  }
}

function getPagePathname(pathname, nextExport) {
  if (!nextExport) return pathname;
  if (pathname === '/') return '/index.js';
  return `${pathname}/index.js`;
}

export default AmpPageHead;
