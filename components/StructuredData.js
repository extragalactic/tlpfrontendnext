import React from 'react';

const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "url": "https://www.threelittlepigsmasonry.ca",
    "name": "Three Little Pigs Masonry",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-833-600-05052",
      "contactType": "Customer Service",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "L4G6H8",
        "streetAddress": "14845 Yonge Street, Unit 6, 322 Aurora"
      },
      "priceRange": "$$",
      "image": "https://s3.ca-central-1.amazonaws.com/3lpm/website/images/social-media/3LPM-logo-card.jpg",
      "review": [
        {
          "@type": "Review",
          "author": "Mark",
          "datePublished": "2017-05-01",
          "description": "We just had four brick window sills replaced with limestone sills. The entire process from initial contact, on site estimator, contact with the chief estimator, quoting, financial arrangements, and replacement, was carried out in a very professional manner. We would like to highlight the craftsmanship and personable talents of Patrick and his assistant. They were polite, clean, attentive to detail, respectful and punctual. We highly recommend them and the entire team at Three Little Pigs Masonry.",
          "name": "A very professional process",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "Ogla & Shawn",
          "datePublished": "2017-07-25",
          "description": "Very happy with the quality of their work and their customer service! The first call was friendly and the estimate was arranged promptly. Contract negotiations and job scheduling went very smoothly. When the time came for the job, the team was fast, clean and professional. They even took the time to assess and complete some extra work to fix an issue we didn't notice prior to that day! From everyone we had dealings with, it's clear that these guys work as one cohesive team and truly take pride in their work and taking care of their clients. I would hire Three Little Pigs Masonry again without a moment's hesitation. Highly recommended!!",
          "name": "Highly recommended",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "Review",
          "author": "private user",
          "datePublished": "2018-04-06",
          "description": "I contacted 3 Pigs for a quote to repair crumbling stone work. Tyler came out to look and take photos (I didn't even need to be home), then Darren phoned me. Darren was extremely knowledgeable and gave me lots of advice on the phone. It turns out it would be a big job ($50,000), but rather than give me hard sell about why I should go ahead, he actually explained why it might be best to leave it and monitor the situation over the next few years. I was very impressed that customer service is more important to them than getting work. I would absolutely trust them in future because I know they are not going to try to rip me off. Highly recommended.",
          "name": "Impressive customer service",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
            "ratingValue": "5",
            "worstRating": "1"
          }
        }
      ]
    }
    }`,
    }}
    />
  );
};

export default StructuredData;
