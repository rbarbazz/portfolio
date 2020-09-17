import { FluidObject } from 'gatsby-image'
import { FileSystemNode } from 'gatsby-source-filesystem'

interface childImageSharpNode extends FileSystemNode {
  childImageSharp: {
    fluid: FluidObject
  }
}

const getImgByName = (
  fileName: String,
  data: { allFile: { nodes: childImageSharpNode[] } },
): FluidObject | any => {
  const imgNode = data.allFile.nodes.find(
    (node: childImageSharpNode) => node.name === fileName,
  )

  if (imgNode) return imgNode.childImageSharp.fluid
  return {}
}

export default getImgByName
