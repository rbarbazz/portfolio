import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

type SiteMetadata = {
  title: string
  titleTemplate: string
  description: string
  socialLinks: {
    github: string
    linkedin: string
    website: string
  }
}

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
              website
            }
          }
        }
      }
    `,
  )
  return site.siteMetadata
}

const SEO: Function = () => {
  const { title, titleTemplate, description } = useSiteMetadata()

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  )
}

export default SEO
