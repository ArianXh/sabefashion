import {client} from './/../client';

const queryProducts = '*[_type == "product"]';
const queryCategories = '*[_type == "category"]';
export const products = await client.fetch(queryProducts);
export const categories = await client.fetch(queryCategories);


//const productsObject = await client.fetch(query);
//export const products = Object.entries(productsObject);



//const data = await client.fetch(query);
//const jsonData = JSON.stringify(data, null, 2);
//const jsonArray = JSON.parse(jsonData)
//export const products = `${jsonData}`;




/*client.fetch(query).then(data => {
    const jsonData = JSON.stringify(data);
    const dynamicScript = document.createElement('script');
    dynamicScript.type = 'text/javascript';
    dynamicScript.text = `const products = ${jsonData};`;
    document.body.appendChild(dynamicScript);
  });
*/
