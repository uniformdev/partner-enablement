import {
  createContentfulEnhancer,
  ContentfulClientList,
  CANVAS_CONTENTFUL_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentful";
import { enhance, EnhancerBuilder } from "@uniformdev/canvas";
import { createClient } from "contentful";

export default function doEnhance(composition) {
  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const clientList = new ContentfulClientList({ client: contentfulClient });
  return enhance({
    composition,
    enhancers: new EnhancerBuilder().parameterType(
      CANVAS_CONTENTFUL_PARAMETER_TYPES,
      createContentfulEnhancer({ client: clientList })
    ),
    context: {},
  });
}
