import clientSanity from './/../client';

const query = '*[_type == "product"]';
export const products = await clientSanity.fetch(query);