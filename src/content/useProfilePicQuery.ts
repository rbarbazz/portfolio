import { useStaticQuery, graphql } from 'gatsby';

const useProfilePicQuery = () =>
  useStaticQuery(graphql`
    {
      file(name: { eq: "RB" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

export default useProfilePicQuery;
