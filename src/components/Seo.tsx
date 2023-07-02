import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

interface SEOProps {
  title: string;
  keywords: string[];
  description?: string;
  lang?: string;
  image?: string;
}

const SEO = ({
  description,
  lang = "en",
  keywords,
  title,
  image,
}: SEOProps) => {
  const data = useStaticQuery(detailsQuery);
  const metaDescription = description || data.site.siteMetadata.description;
  return (
    <>
      <html lang={lang} />
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={image || data.site.siteMetadata.image}
      />
      <meta property="og:description" content="metaDescription" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={data.site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(`, `)} />
      ) : null}
      <link
        type="text/plain"
        rel="author"
        href="https://sirlisko.com/humans.txt"
      />
    </>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;
