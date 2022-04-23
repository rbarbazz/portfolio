import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FileSystemNode } from 'gatsby-source-filesystem'

interface childImageSharpNode extends FileSystemNode {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

const getImgByName = (
  fileName: String,
  data: { allFile: { nodes: childImageSharpNode[] } },
) => {
  const imgNode = data.allFile.nodes.find((node) => node.name === fileName)

  if (imgNode) return imgNode.childImageSharp.gatsbyImageData
  return {}
}

export default getImgByName
