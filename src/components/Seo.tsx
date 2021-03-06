import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

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
}: SEOProps) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: title,
            },
            {
              property: `og:image`,
              content: image || data.site.siteMetadata.image,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ].concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : []
          )}
        >
          <link
            type="text/plain"
            rel="author"
            href="https://sirlisko.com/humans.txt"
          />
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;
