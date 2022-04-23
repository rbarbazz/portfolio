import { useStaticQuery, graphql } from 'gatsby'

const useProfilePicQuery = () =>
  useStaticQuery(graphql`{
  file(name: {eq: "RB"}) {
    childImageSharp {
      gatsbyImageData(width: 200, quality: 90, layout: CONSTRAINED)
    }
  }
}
`)

export default useProfilePicQuery
