import { useStaticQuery, graphql } from 'gatsby'

const useHomeBGQuery = () =>
  useStaticQuery(graphql`
    query {
      emeraldLakeImage: file(name: { eq: "Emerald_Lake" }) {
        childImageSharp {
          gatsbyImageData(quality: 90, layout: FULL_WIDTH)
        }
      }
    }
  `)

export default useHomeBGQuery
