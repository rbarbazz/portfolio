import { FluidObject } from 'gatsby-image';

declare interface Project {
  title: string;
  description: string;
  fileName: string;
  technoList: string[];
  projectUrl: string;
}

declare interface IllustratedProject extends Project {
  fluid: FluidObject;
}
