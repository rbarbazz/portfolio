import * as React from 'react';
import { graphql } from 'gatsby';


export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        tagline
      }
    }
  }
`;

interface IndexProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        tagline: string;
      };
    };
  };
}

const Index: React.FunctionComponent<IndexProps> = ({ data }: IndexProps) => {
  const { title, tagline } = data.site.siteMetadata;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
    </div>
  );
};

export default Index;
