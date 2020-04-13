import { useStaticQuery, graphql } from 'gatsby';

const useHomeBGQuery = () =>
  useStaticQuery(graphql`
    {
      file(name: { eq: "Emerald_Lake" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

export default useHomeBGQuery;
