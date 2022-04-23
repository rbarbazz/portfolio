import { useStaticQuery, graphql } from 'gatsby'

const useProjectsQuery = () =>
  useStaticQuery(graphql`{
  allFile(filter: {relativeDirectory: {eq: "projects"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(quality: 90, layout: FULL_WIDTH)
      }
    }
  }
}
`)

export default useProjectsQuery
