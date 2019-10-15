import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SiteMetadata = {
  title: string;
  titleTemplate: string;
  description: string;
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            socialLinks {
              github
              linkedin
              email
            }
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

const SEO: Function = () => {
  const { title, titleTemplate, description } = useSiteMetadata();

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ]}
    />
  );
};

export default SEO;
