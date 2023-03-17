import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: "flrrvx3c", 
  dataset: "production", 
})

const fs = require('fs');

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}