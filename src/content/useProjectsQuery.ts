import { useStaticQuery, graphql } from 'gatsby';

const useProjectsQuery = () =>
  useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "projects" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxWidth: 1300, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

export default useProjectsQuery;
