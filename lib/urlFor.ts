import ImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

// Get a pre-configured url-builder from your sanity client
const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
